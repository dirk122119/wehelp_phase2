from flask import *
import mysql.connector
from sqlFunction import create_connection_pool

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
		sql="SET SESSION group_concat_max_len = 1000000;"
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
		if(len(results)!=12 and len(results)!=0):
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
			return jsonify({"nextPage":None,"data":data}),200

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
				return jsonify({"nextPage":int(page)+1,"data":data}),200
			else:
				return jsonify({"nextPage":None,"data":data}),200
			
		elif(int(page)<0):
			return jsonify({"error":True,"message":"page >= 0"}),500
		elif(int(page)>totalPage):
			return jsonify({"error":True,"message":"out of range"}),500
		else:
			return jsonify({"error":True,"message":f"not find keyword : {keyword}"}),500
		



@app.route("/api/attraction/<attractionId>")
def attractionIdAPI(attractionId):
	connect_objt=cnx.get_connection()
	cursor = connect_objt.cursor()
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
		return jsonify({"data":responseView}),200
	else:
		return jsonify({"error":True,"message": "景點編號不正確"}),400
@app.route("/api/categories")

def categoriesApi():
	connect_objt=cnx.get_connection()
	cursor = connect_objt.cursor()
	sql="SELECT categoryName from category;"
	cursor.execute(sql)
	results=cursor.fetchall()
	data=[]
	for item in results:
		data.append(item[0])
	return jsonify({"data":data})



app.debug=True
app.run("0.0.0.0",port=3000)
