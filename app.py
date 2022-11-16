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
		if(keyword==None):
			sql="SELECT view._id,view.name,category.categoryName,view.description,view.address,view.direction,mrt.mrtName,view.latitude,view.longitude,view.file FROM view INNER JOIN category ON view.category = category.categoryID INNER JOIN mrt ON view.mrt = mrt.mrtID;"
			cursor.execute(sql)
			result=cursor.fetchall()
			data=[]
			for i in range(int(page)*12,int(page)*12+12):
				# get categoryName from category table
				print(result[i])
				images=result[i][9].split("https://")
				returnImages=[]
				for imag in images:
					if (imag.endswith("jpg") or imag.endswith("JPG") or imag.endswith("png") or imag.endswith("PNG")):
						returnImages.append(imag)
				print(returnImages)
				
				responseView={
					"id":result[i][0],
					"name":result[i][1],
					"category":result[i][2],
					"description":result[i][3],
					"address":result[i][4],
					"transport":result[i][5],
					"mrt":result[i][6],
					"lat":float(result[i][7]),
					"lng":float(result[i][8]),
					"images":returnImages}
				data.append(responseView)
			
			cursor.close()
			connect_objt.close()
			return jsonify({"nextPage":int(page)+1,"data":data}),200
		else:
			sql="SELECT view._id,view.name,category.categoryName,view.description,view.address,view.direction,mrt.mrtName,view.latitude,view.longitude,view.file,view.numberID FROM view INNER JOIN category ON view.category = category.categoryID INNER JOIN mrt ON view.mrt = mrt.mrtID WHERE view.name like %s or category.categoryName = %s;"
			val=('%'+keyword+'%',keyword)
			cursor.execute(sql,val)
			results=cursor.fetchall()
			
			data=[]
			for result in results:
				if(result[10]>int(page)*12+12 or result[10]<int(page)*12+1):
					pass
				else:
					images=result[9].split("https://")
					returnImages=[]
					for imag in images:
						if (imag.endswith("jpg") or imag.endswith("JPG") or imag.endswith("png") or imag.endswith("PNG")):
							returnImages.append(imag)
					
					
					responseView={
						"id":result[0],
						"name":result[1],
						"category":result[2],
						"description":result[3],
						"address":result[4],
						"transport":result[5],
						"mrt":result[6],
						"lat":float(result[7]),
						"lng":float(result[8]),
						"images":returnImages}
					data.append(responseView)
			
			cursor.close()
			connect_objt.close()
			return jsonify({"nextPage":int(page)+1,"data":data}),200

@app.route("/api/attraction/<attractionId>")
def attractionIdAPI(attractionId):
	connect_objt=cnx.get_connection()
	cursor = connect_objt.cursor()
	sql="SELECT view._id,view.name,category.categoryName,view.description,view.address,view.direction,mrt.mrtName,view.latitude,view.longitude,view.file,view.numberID FROM view INNER JOIN category ON view.category = category.categoryID INNER JOIN mrt ON view.mrt = mrt.mrtID WHERE view._id= %s;"
	val=(attractionId,)
	cursor.execute(sql,val)
	result=cursor.fetchone()
	if(result!=None):
		print(result)
		images=result[9].split("https://")
		returnImages=[]
		for imag in images:
			if (imag.endswith("jpg") or imag.endswith("JPG") or imag.endswith("png") or imag.endswith("PNG")):
				returnImages.append(imag)

		responseView={
			"id":result[0],
			"name":result[1],
			"category":result[2],
			"description":result[3],
			"address":result[4],
			"transport":result[5],
			"mrt":result[6],
			"lat":float(result[7]),
			"lng":float(result[8]),
			"images":returnImages}
		cursor.close()
		connect_objt.close()
		return jsonify({"data":responseView})
	else:
		return jsonify({"error":True,"message": "無此Id"})
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
app.run(port=3000)