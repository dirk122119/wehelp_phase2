from flask import *
import json
import requests
from werkzeug.security import generate_password_hash,check_password_hash
import mysql.connector
# from mysql.connector.errors import Error
from sqlFunction import create_connection_pool
import jwt
from datetime import datetime,timedelta,time,date
from dotenv import load_dotenv,dotenv_values
import os
import re

load_dotenv()
private_key=os.getenv('jwtKey')
app=Flask(__name__)
app.config["JSON_AS_ASCII"]=False
app.config["TEMPLATES_AUTO_RELOAD"]=True
app.config['JSON_SORT_KEYS'] = False

# create mysql connect pool
try:
    cnx=create_connection_pool()
except:
    print("無法建立connect pool")


# Pages
@app.route("/")
def index():
	return render_template("index.html")
@app.route("/attraction/<id>")
def attraction(id):
	return render_template("attraction.html")
@app.route("/booking")
def booking():
	return render_template("booking.html")
@app.route("/thankyou")
def thankyou():
	return render_template("thankyou.html")

# API
@app.route("/api/attractions")
def attractionsAPI():
	page = request.args.get('page')
	keyword = request.args.get('keyword')

	if(page==None):
		return jsonify({"error":True,"message":"必須指定page"}),500
	else:
		connect_objt=cnx.get_connection()
		cursor = connect_objt.cursor()
		sql="SET SESSION group_concat_max_len = 1000000000"
		cursor.execute(sql)
		sql="SELECT COUNT(*) from view;"
		cursor.execute(sql)
		numberView=cursor.fetchone()[0]
		if(numberView%12>0):
			# 0,1,2...,totalPage
			totalPage=numberView//12
		else:
			# 0,1,2...,totalPage
			totalPage=(numberView//12)-1

		if(keyword==None):
			sql="SELECT view.numberId,view.name,category.categoryName,view.description,view.address,view.direction,mrt.mrtName,view.latitude,view.longitude,GROUP_CONCAT(image.imageName) FROM view INNER JOIN category ON view.category = category.categoryID INNER JOIN mrt ON view.mrt = mrt.mrtID INNER JOIN image ON view.numberId = image.viewId GROUP BY view.numberId ORDER BY view.numberId LIMIT 12 OFFSET %s ;"
			val=(int(page)*12,)
			cursor.execute(sql,val)
			results=cursor.fetchall()
		else:
			sql="SELECT view.numberId,view.name,category.categoryName,view.description,view.address,view.direction,mrt.mrtName,view.latitude,view.longitude,GROUP_CONCAT(image.imageName) FROM view INNER JOIN category ON view.category = category.categoryID INNER JOIN mrt ON view.mrt = mrt.mrtID INNER JOIN image ON view.numberId = image.viewId  WHERE view.name like %s or category.categoryName = %s GROUP BY view.numberId ORDER BY view.numberId LIMIT 12 OFFSET %s;"
			val=(f"%{keyword}%",keyword,int(page)*12)
			cursor.execute(sql,val)
			results=cursor.fetchall()
		cursor.close()
		connect_objt.close()
		if(len(results)!=12):
			data=[]
			for result in results:
				# mrt table get "Null"
				if(result[6]=="Null"):
					getMrt=None
				else:
					getMrt=result[6]
				responseView={
					"id":result[0],
					"name":result[1],
					"category":result[2],
					"description":result[3],
					"address":result[4],
					"transport":result[5],
					"mrt":getMrt,
					"lat":float(result[7]),
					"lng":float(result[8]),
					"images":result[9].split(",")}
				data.append(responseView)
			response = make_response(jsonify({"nextPage":None,"data":data}),200)
			response.headers['content-type'] = 'application/json'
			response.headers['Access-Control-Allow-Origin'] = '*'
			return response

		elif(len(results)==12):
			data=[]
			for result in results:
				# mrt table get "Null"
				if(result[6]=="Null"):
					getMrt=None
				else:
					getMrt=result[6]
				responseView={
					"id":result[0],
					"name":result[1],
					"category":result[2],
					"description":result[3],
					"address":result[4],
					"transport":result[5],
					"mrt":getMrt,
					"lat":float(result[7]),
					"lng":float(result[8]),
					"images":result[9].split(",")}
				data.append(responseView)
			if(int(page)!=totalPage):
				response = make_response(jsonify({"nextPage":int(page)+1,"data":data}),200)
				response.headers['content-type'] = 'application/json'
				response.headers['Access-Control-Allow-Origin'] = '*'
				return response
			else:
				response = make_response(jsonify({"nextPage":None,"data":data}),200)
				response.headers['content-type'] = 'application/json'
				response.headers['Access-Control-Allow-Origin'] = '*'
				return response
			
		elif(int(page)<0):
			response = make_response(jsonify({"error":True,"message":"page >= 0"}),500)
			response.headers['content-type'] = 'application/json'
			response.headers['Access-Control-Allow-Origin'] = '*'
			return response
		elif(int(page)>totalPage):
			response = make_response(jsonify({"error":True,"message":"out of range"}),500)
			response.headers['content-type'] = 'application/json'
			response.headers['Access-Control-Allow-Origin'] = '*'
			return response
		else:
			response = make_response(jsonify({"error":True,"message":f"not find keyword : {keyword}"}),mimetype='application/json',status=500)
			response.headers['content-type'] = 'application/json'
			response.headers['Access-Control-Allow-Origin'] = '*'
			return response
		



@app.route("/api/attraction/<attractionId>")
def attractionIdAPI(attractionId):
	connect_objt=cnx.get_connection()
	cursor = connect_objt.cursor()
	sql="SET SESSION group_concat_max_len = 10000000000"
	cursor.execute(sql)
	sql="SELECT view.numberId,view.name,category.categoryName,view.description,view.address,view.direction,mrt.mrtName,view.latitude,view.longitude,GROUP_CONCAT(image.imageName) FROM view INNER JOIN category ON view.category = category.categoryID INNER JOIN mrt ON view.mrt = mrt.mrtID INNER JOIN image ON view.numberId = image.viewId  WHERE view.numberId= %s GROUP BY view.numberId;"
	val=(attractionId,)
	cursor.execute(sql,val)
	result=cursor.fetchone()
	if(result!=None):
		# mrt table get "Null"
		if(result[6]=="Null"):
			getMrt=None
		else:
			getMrt=result[6]

		responseView={
			"id":result[0],
			"name":result[1],
			"category":result[2],
			"description":result[3],
			"address":result[4],
			"transport":result[5],
			"mrt":getMrt,
			"lat":float(result[7]),
			"lng":float(result[8]),
			"images":result[9].split(",")}
		cursor.close()
		connect_objt.close()
		response = make_response(jsonify({"data":responseView}),200)
		response.headers['content-type'] = 'application/json'
		response.headers['Access-Control-Allow-Origin'] = '*'
		return response
	else:
		response = make_response(jsonify({"error":True,"message": "景點編號不正確"}),400)
		response.headers['content-type'] = 'application/json'
		response.headers['Access-Control-Allow-Origin'] = '*'
		return response
		
@app.route("/api/categories")
def categoriesAPI():
	connect_objt=cnx.get_connection()
	cursor = connect_objt.cursor()
	sql="SELECT categoryName from category;"
	cursor.execute(sql)
	results=cursor.fetchall()
	data=[]
	for item in results:
		data.append(item[0])

	# json.dumps and jsonify difference
	response = make_response(jsonify({"data":data}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
	# response.headers['content-type'] = 'application/json'
	# response.headers['Access-Control-Allow-Origin'] = '*'
	cursor.close()
	connect_objt.close()
	return response

@app.route("/api/user",methods=["POST"])
def registerUserAPI():

	name = request.get_json()["name"]
	email= request.get_json()["email"]
	password = request.get_json()["password"]
	if not(name) or not(email) or not(password):
		response = make_response(jsonify({"error":True,"message":"不能空白"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		return response
	if not(re.search("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", email)):
		response = make_response(jsonify({"error":True,"message":"信箱驗證錯誤"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		return response
	if not(re.search("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$", password)):
		response = make_response(jsonify({"error":True,"message":"密碼至少需要一個大寫英文字母和一個小寫英文字母與數字，且長度大於6"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		return response
	
	connect_objt=cnx.get_connection()
	cursor = connect_objt.cursor()
	sql="SELECT * from membership where email=%s;"
	val=(email,)
	cursor.execute(sql,val)
	result=cursor.fetchone()
	
	if(result!=None):
		response = make_response(jsonify({"error":True,"message":"重複的email"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		cursor.close()
		connect_objt.close()
		return response
	else:
		passwordHashed=generate_password_hash(password=password)
		sql="insert into membership (name,email,password) values (%s,%s,%s);"
		val=(name,email,passwordHashed)
		cursor.execute(sql,val)
		connect_objt.commit()
		cursor.close()
		connect_objt.close()
		response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		return response

@app.route("/api/user/auth",methods=["GET","PUT","DELETE"])
def loginUserAPI():
	if(request.method=="PUT"):
		# response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		email= request.get_json()["email"]
		password = request.get_json()["password"]
		passwordHashed=generate_password_hash(password=password)
		if not(email) or not(password):
			response = make_response(jsonify({"error":True,"message":"兩者不能空白"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			return response
		connect_objt=cnx.get_connection()
		cursor = connect_objt.cursor()
		sql="SELECT * from membership where email=%s;"
		val=(email,)
		cursor.execute(sql,val)
		result=cursor.fetchone()
		if(result!=None):
			if(check_password_hash(result[3],password)):
				expTime=datetime.now()+timedelta(days=7)
				encoded = jwt.encode({"id":result[0],"name": result[1]}, private_key, algorithm="HS256")
				response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
				response.set_cookie(key='jwt', value=encoded, expires=expTime)
				cursor.close()
				connect_objt.close()
				return response
			else:
				response = make_response(jsonify({"error":True,"message":"信箱或密碼錯誤"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
				return response
		else:
			response = make_response(jsonify({"error":True,"message":"無此信箱"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			return response
	if(request.method=="GET"):
		token=request.cookies.get('jwt')
		if(token):
			tokenDecode=jwt.decode(token,private_key,algorithms="HS256")
			connect_objt=cnx.get_connection()
			cursor = connect_objt.cursor()
			sql="SELECT * from membership where id=%s;"
			val=(tokenDecode["id"],)
			cursor.execute(sql,val)
			result=cursor.fetchone()
			cursor.close()
			connect_objt.close()
			if(tokenDecode["name"]==result[1]):
				response = make_response(jsonify({"data":{"id":result[0],"name":result[1],"email":result[2]}}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
				return response
			else:
				response = make_response(jsonify({"data":None}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
				return response
		else:
			response = make_response(jsonify({"data":None}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			return response
	if(request.method=="DELETE"):
		token=request.cookies.get('jwt')
		if(token):
			tokenDecode=jwt.decode(token,private_key,algorithms="HS256")
			expTime=datetime.now()-timedelta(days=2)
			encoded = jwt.encode({"id":tokenDecode["id"],"name": tokenDecode["name"]}, private_key, algorithm="HS256")
			response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			response.set_cookie(key='jwt', value=encoded, expires=expTime)
			return response
		else:
			response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			return response
@app.route("/api/booking",methods=["GET","POST","DELETE"])
def bookingAPI():
	token=request.cookies.get('jwt')
	
	if(token):
		tokenDecode=jwt.decode(token,private_key,algorithms="HS256")
		userId=tokenDecode["id"]
		if(request.method=="GET"):
			connect_objt=cnx.get_connection()
			cursor = connect_objt.cursor()
			sql="SET SESSION group_concat_max_len = 10000000000"
			cursor.execute(sql)
			sql="with added_row_number AS(SELECT membership.name,view.numberId,view.name as viewName,view.address,image.imageName,booking.date,booking.time,booking.price,booking.id,ROW_NUMBER() OVER(PARTITION BY booking.id) AS row_numb FROM booking INNER JOIN view ON booking.attractionId = view.numberId INNER JOIN membership ON booking.userId = membership.id Left JOIN image ON booking.attractionId = image.viewId WHERE booking.userId= %s) "
			sql=sql+"SELECT * FROM added_row_number where row_numb = 1;"
			val=(userId,)
			cursor.execute(sql,val)
			results=cursor.fetchall()
			bookingList=[]
			for item in results:
				jsonfile={
					"attraction":{
						"id":item[1],
						"name":item[2],
						"address":item[3],
						"image":item[4].split(",")[0]
					},
					"date":item[5].strftime("%Y-%m-%d"),
					"time":item[6],
					"price":item[7],
					"bookingId":item[8]
					}
				bookingList.append(jsonfile)
			response = make_response(jsonify({"data":bookingList,"userId":userId}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			cursor.close()
			connect_objt.close()
			return response
		if(request.method=="POST"):
			attractionId = request.get_json()["attractionId"]
			formDate = request.get_json()["date"]
			time = request.get_json()["time"]
			price = request.get_json()["price"]
			today = date.today()
			datetime_object = datetime.strptime(formDate, '%Y-%m-%d')
			datetime_object = datetime_object.date()
			if not(formDate):
				response = make_response(jsonify({"error":True,"message":"日期不能為空"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
				return response
			if(datetime_object<today):
				response = make_response(jsonify({"error":True,"message":"預約時間錯誤"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
				return response
			connect_objt=cnx.get_connection()
			cursor = connect_objt.cursor()
			try:
				sql="insert into booking (attractionId,date,time,price,userId) values (%s,%s,%s,%s,%s);"
				val=(attractionId,formDate,time,price,userId)
				cursor.execute(sql,val)
				connect_objt.commit()
				cursor.close()
				connect_objt.close()
				response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			except mysql.connector.Error as e:
				response = make_response(jsonify({"error":True,"message":e.msg}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			except Exception as e:
				response = make_response(jsonify({"error":True,"message":f"{e}"}),500,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			finally:
				return response
		if(request.method=="DELETE"):
			try:
				bookingId = request.get_json()["bookingId"]
				connect_objt=cnx.get_connection()
				cursor = connect_objt.cursor()
				sql="DELETE FROM booking where id=%s;"
				val=(bookingId,)
				cursor.execute(sql,val)
				connect_objt.commit()
				response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			except mysql.connector.Error as e:
				response = make_response(jsonify({"error":True,"message":e.msg}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			except Exception as e:
				response = make_response(jsonify({"error":True,"message":f"{e}"}),500,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			finally:
				return response

	else:
		response = make_response(jsonify({"error":True,"message":"未登入系統"}),403,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		return response

@app.route("/api/orders",methods=["POST"])
def orderAPI():
	token=request.cookies.get('jwt')
	if(token):
		tokenDecode=jwt.decode(token,private_key,algorithms="HS256")
		userId=tokenDecode["id"]
		try:
			get =request.get_json()
			if not(get["contact"]["name"] and get["contact"]["email"]and get["contact"]["phone"]):
				response = make_response(jsonify({"error":True,"message":"聯絡資訊三者皆不能空白"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
				return response
			now = datetime.now()
			today = date.today()
			orderNumber = now.strftime("%Y%m%d%H%M%S%f")[:-4]
			connect_objt=cnx.get_connection()
			cursor = connect_objt.cursor()
			for item in get["order"]["trip"]:
				datetime_object = datetime.strptime(item["date"], '%Y-%m-%d')
				datetime_object=datetime_object.date()
				if not(item["date"]):
					response = make_response(jsonify({"error":True,"message":"日期不能為空"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
					return response
				if(datetime_object<today):
					response = make_response(jsonify({"error":True,"message":"預約時間錯誤"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
					return response
				sql="insert into orders (number,price,attractionId,date,time,contactName,contactEmail,contactPhone,status,userId) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);"
				val=(orderNumber,get["order"]["price"],item["attraction"]["id"],item["date"],item["time"],get["contact"]["name"],get["contact"]["email"],get["contact"]["phone"],1,userId)
				cursor.execute(sql,val)
				connect_objt.commit()
			sql="DELETE FROM booking where userId=%s;"
			val=(userId,)
			cursor.execute(sql,val)
			connect_objt.commit()
			cursor.close()
			connect_objt.close()
			url = 'https://sandbox.tappaysdk.com/tpc/payment/pay-by-prime'
			headers = {"Content-Type": "application/json","x-api-key":"partner_g8cB64Avg5NLdNSDY2At9BZoXZJrX1q7pzYUi4tf6YfdVtQoQtKKDXAt"}
			data={
					"prime": get["prime"],
					"partner_key": os.getenv('TapPay_partner_key'),
					"merchant_id": os.getenv('TapPay_merchant_id'),
					"details":"TapPay Test",
					"amount": get["order"]["price"],
					"cardholder": {
						"phone_number": "+886912345678",
						"name": "王小明",
						"email": "LittleMing@Wang.com",
						"zip_code": "100",
						"address": "台北市天龍區芝麻街1號1樓",
						"national_id": "A123456789"
					},
					"remember": True
					}
			jsonData=json.dumps(data)
			response = requests.post(url, data=jsonData, headers=headers).json()
			if(response["status"]==0):
				connect_objt=cnx.get_connection()
				cursor = connect_objt.cursor()
				sql="insert into pays (rec_trade_id,message,orderNumber) values (%s,%s,%s);"
				val=(response["rec_trade_id"],response["msg"],orderNumber)
				cursor.execute(sql,val)
				connect_objt.commit()
				sql="update orders set status = %s where number = %s"
				val=(0,orderNumber)
				cursor.execute(sql,val)
				connect_objt.commit()
				cursor.close()
				connect_objt.close()
				response = make_response(jsonify({"data":{"number":orderNumber,"payment":{"status":0,"message":"付款成功"}}}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			else:
				connect_objt=cnx.get_connection()
				cursor = connect_objt.cursor()
				sql="insert into pays (rec_trade_id,message,orderNumber) values (%s,%s,%s);"
				val=(response["rec_trade_id"],response["msg"],orderNumber)
				cursor.execute(sql,val)
				connect_objt.commit()
				cursor.close()
				connect_objt.close()
				response = make_response(jsonify({"error":True,"message":response["msg"],"number":orderNumber}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		except mysql.connector.Error as e:
			response = make_response(jsonify({"error":True,"message":e.msg}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		except Exception as e:
			response = make_response(jsonify({"error":True,"message":f"{e}"}),500,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		finally:
			return response
	else:
		response = make_response(jsonify({"error":True,"message":"未登入系統"}),403,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		return response
@app.route("/api/orders/<numberId>",methods=["GET","POST"])
def orderGetAPI(numberId):
	token=request.cookies.get('jwt')
	if(token):
		tokenDecode=jwt.decode(token,private_key,algorithms="HS256")
		userId=tokenDecode["id"]
		connect_objt=cnx.get_connection()
		cursor = connect_objt.cursor()
		sql="with added_row_number AS(SELECT view.name as viewName,view.numberId,view.address,image.imageName,orders.number,orders.price,orders.date,orders.time,orders.contactName,orders.contactEmail,orders.contactPhone,orders.status,ROW_NUMBER() OVER(PARTITION BY orders.id) AS row_numb FROM orders INNER JOIN view ON orders.attractionId = view.numberId INNER JOIN image ON orders.attractionId = image.viewId WHERE orders.number= %s)"
		sql=sql+"SELECT * FROM added_row_number where row_numb = 1;"
		val=(numberId,)
		cursor.execute(sql,val)
		results=cursor.fetchall()
		if(len(results)>0):
			tripList=[]
			for item in results:
				tripList.append({"attraction":{"id":item[1],"name":item[0],"address":item[2],"image":item[3]},"date":item[6].strftime("%Y-%m-%d"),"time":item[7]})
			cursor.close()
			connect_objt.close()
			response = make_response(jsonify({"data":{"number":numberId,"price":item[5],"trip":tripList,"contact":{"name":item[8],"email":item[9],"phone":item[10]},"status":item[11]}}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		else:
			response = make_response(jsonify({"error":True,"message":"找不到此筆訂單"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		return response
	else:
		response = make_response(jsonify({"error":True,"message":"未登入系統"}),403,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
		return response
app.debug=True
app.run("0.0.0.0",port=3000)
