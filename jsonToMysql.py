import json 
import mysql.connector
from sqlFunction import create_connection_pool,insertCatgory,insertMrt,insertView,insertImage



try:
    cnx=create_connection_pool()
except:
    print("無法建立connect pool")

f = open("./data/taipei-attractions.json")
data = json.load(f)


siteCat=[]
mrtList=[]

for i in data["result"]["results"] :
    str=i["CAT"].replace(u'\u3000',u'')
    if str not in siteCat:
        siteCat.append(str)
        insertCatgory(cnx,str)
    if i["MRT"] not in mrtList:
        if(i["MRT"]==None):
            i["MRT"]="Null"
            viewName=i["name"]
            print(f"注意, there is no mrt station in {viewName},use 'Null' in mrt table")
        mrtList.append(i["MRT"])
        mrtList.append(i["MRT"])
        insertMrt(cnx,i["MRT"])

for i in data["result"]["results"] :
    insertView(cnx,i)
    insertImage(cnx,i)

f.close()




