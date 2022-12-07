from flask import *
from werkzeug.security import generate_password_hash,check_password_hash
import mysql.connector
from sqlFunction import create_connection_pool
import jwt
from datetime import datetime,timedelta

private_key="0xjwt"
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
		response = make_response(jsonify({"error":True,"message":"三者不能空白"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*","Access-Control-Allow-Methods":"POST"})
		return response

	connect_objt=cnx.get_connection()
	cursor = connect_objt.cursor()
	sql="SELECT * from membership where email=%s;"
	val=(email,)
	cursor.execute(sql,val)
	result=cursor.fetchone()
	
	if(result!=None):
		response = make_response(jsonify({"error":True,"message":"重複的email"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*","Access-Control-Allow-Methods":"POST"})
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
		response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*","Access-Control-Allow-Methods":"POST"})
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
		results=cursor.fetchone()
		if(check_password_hash(results[3],password)):
			expTime=datetime.now()+timedelta(days=7)
			encoded = jwt.encode({"id":results[0],"name": results[1]}, private_key, algorithm="HS256")
			response = make_response(jsonify({"ok":True}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
			response.set_cookie(key='jwt', value=encoded, expires=expTime)
			cursor.close()
			connect_objt.close()
			return response
		else:
			response = make_response(jsonify({"error":True,"message":"信箱或密碼錯誤"}),400,{'content-type':'application/json','Access-Control-Allow-Origin':"*"})
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
			results=cursor.fetchone()
			cursor.close()
			connect_objt.close()
			if(tokenDecode["name"]==results[1]):
				response = make_response(jsonify({"data":{"id":results[0],"name":results[1],"email":results[2]}}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*","Access-Control-Allow-Methods":"*"})
				return response
			else:
				response = make_response(jsonify({"data":None}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*","Access-Control-Allow-Methods":"*"})
				return response
		else:
			response = make_response(jsonify({"data":None}),200,{'content-type':'application/json','Access-Control-Allow-Origin':"*","Access-Control-Allow-Methods":"*"})
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
app.debug=True
app.run("0.0.0.0",port=3000)
