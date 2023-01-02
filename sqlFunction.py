import json 
import mysql.connector
from dotenv import load_dotenv,dotenv_values
import os

def create_connection_pool():
    # change db_config on EC2
    load_dotenv()
    db_config = {
        'host' : os.getenv('sqlHost'),
        'user' : os.getenv('sqlUser'),
        'password' : os.getenv('sqlPassword'),
        'database' : os.getenv('sqlDatabase'),
        'port' : os.getenv('sqlPort')
    }
    cnxpool = mysql.connector.pooling.MySQLConnectionPool(pool_name = "taipeiTrip",pool_size=10, **db_config)

    return cnxpool

def createViewTable(cnx):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="CREATE TABLE view (numberId int auto_increment Primary KEY, _id int not null, name varchar(255),category int not null,  description LONGTEXT, address varchar(255), direction LONGTEXT,mrt int null, latitude varchar(255), longitude varchar(255),  file LONGTEXT,CONSTRAINT fk_category FOREIGN KEY (category) REFERENCES category(categoryId),CONSTRAINT fk_mrt FOREIGN KEY (mrt) REFERENCES mrt(mrtId));"
    cursor.execute(sql,)
    cursor.close()
    connect_objt.close()

def createCategoryTable(cnx):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="create table category( categoryId int auto_increment Primary KEY, categoryName varchar(255));"
    cursor.execute(sql,)
    cursor.close()
    connect_objt.close()

def createMrtTable(cnx):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="create table mrt( mrtId int auto_increment Primary KEY, mrtName varchar(255));"
    cursor.execute(sql,)
    cursor.close()
    connect_objt.close()

def createImagetable(cnx):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="create table image( imageId int auto_increment Primary KEY, imageName LONGTEXT,viewId int,CONSTRAINT fk_view FOREIGN KEY (viewId) REFERENCES view(numberId));"
    cursor.execute(sql,)
    cursor.close()
    connect_objt.close()

def insertView(cnx,obj):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    # =====fetch catgoryID=====
    string=obj["CAT"].replace(u'\u3000',u'')
    sql="select categoryId from category where categoryName=%s;"
    val=(string,)
    cursor.execute(sql,val)
    categoryID = cursor.fetchone()
    # =====fetch mrtID=====
    sql="select mrtId from mrt where mrtName=%s;"
    val=(obj["MRT"],)
    cursor.execute(sql,val)
    mrtID = cursor.fetchone()
    # =====insert viewToDatabase=====
    sql="INSERT INTO view (_id,name,category,description,address,direction,mrt,latitude,longitude) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s);"
    val=(obj["_id"],
        obj["name"],
        categoryID[0],
        obj["description"],
        obj["address"],
        obj["direction"],
        mrtID[0],
        obj["latitude"],
        obj["longitude"],
        )
    cursor.execute(sql,val)
    connect_objt.commit()

    cursor.close()
    connect_objt.close()

def insertImage(cnx,obj):

    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="select numberId from view where name=%s;"
    val=(obj["name"],)
    cursor.execute(sql,val)
    numberId = cursor.fetchone()[0]
    cursor.close()
    connect_objt.close()

    images=obj["file"].split("https://")
    for imag in images:
        if (imag.endswith("jpg") or imag.endswith("JPG") or imag.endswith("png") or imag.endswith("PNG")):
            connect_objt=cnx.get_connection()
            cursor = connect_objt.cursor()
            sql="INSERT INTO image (imageName,viewId) VALUES (%s,%s)"
            val=(imag,numberId)
            cursor.execute(sql,val)
            connect_objt.commit()
            cursor.close()
            connect_objt.close()
    


            
    
    


def insertMrt(cnx,string):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="INSERT INTO mrt (mrtName) VALUES (%s)"
    val=(string,)
    cursor.execute(sql,val)
    connect_objt.commit()
    cursor.close()
    connect_objt.close()

def insertCatgory(cnx,string):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="INSERT INTO category (categoryName) VALUES (%s)"
    val=(string,)
    cursor.execute(sql,val)
    connect_objt.commit()
    cursor.close()
    connect_objt.close()




def deleteAllTables(cnx):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="DROP TABLE view,category,mrt,image;"
    cursor.execute(sql)
    connect_objt.commit()
    cursor.close()
    connect_objt.close()

if __name__ == '__main__':
    try:
        cnx=create_connection_pool()
    except:
        print("無法建立connect pool")
    finally:
        deleteAllTables(cnx)
        createCategoryTable(cnx)
        createMrtTable(cnx)
        createViewTable(cnx)
        createImagetable(cnx)