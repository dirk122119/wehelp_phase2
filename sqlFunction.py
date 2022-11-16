import json 
import mysql.connector

def create_connection_pool():
    db_config = {
        'host' : 'localhost',
        'user' : 'root',
        'password' : 'dddddddd',
        'database' : 'taipeiTrip',
        'port' : 3306,
    }
    cnxpool = mysql.connector.pooling.MySQLConnectionPool(pool_name = "taipeiTrip",pool_size=10, **db_config)

    return cnxpool

def createViewTable(cnx):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="CREATE TABLE view (numberID int auto_increment Primary KEY, _id int not null, name varchar(255),category int not null,  description LONGTEXT, address varchar(255), direction LONGTEXT,mrt int null, latitude varchar(255), longitude varchar(255),  file LONGTEXT,CONSTRAINT fk_category FOREIGN KEY (category) REFERENCES category(categoryID),CONSTRAINT fk_mrt FOREIGN KEY (mrt) REFERENCES mrt(mrtID));"
    cursor.execute(sql,)
    cursor.close()
    connect_objt.close()

def createCategoryTable(cnx):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="create table category( categoryID int auto_increment Primary KEY, categoryName varchar(255));"
    cursor.execute(sql,)
    cursor.close()
    connect_objt.close()

def createMrtTable(cnx):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    sql="create table mrt( mrtID int auto_increment Primary KEY, mrtName varchar(255));"
    cursor.execute(sql,)
    cursor.close()
    connect_objt.close()


def insertView(cnx,obj):
    connect_objt=cnx.get_connection()
    cursor = connect_objt.cursor()
    # =====fetch catgoryID=====
    string=obj["CAT"].replace(u'\u3000',u'')
    sql="select categoryID from category where categoryName=%s;"
    val=(string,)
    cursor.execute(sql,val)
    categoryID = cursor.fetchone()
    # =====fetch mrtID=====
    sql="select mrtID from mrt where mrtName=%s;"
    val=(obj["MRT"],)
    cursor.execute(sql,val)
    mrtID = cursor.fetchone()
    # =====insert viewToDatabase=====
    sql="INSERT INTO view (_id,name,category,description,address,direction,mrt,latitude,longitude,file) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);"
    val=(obj["_id"],
        obj["name"],
        categoryID[0],
        obj["description"],
        obj["address"],
        obj["direction"],
        mrtID[0],
        obj["latitude"],
        obj["longitude"],
        obj["file"])
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

if __name__ == '__main__':
    try:
        cnx=create_connection_pool()
    except:
        print("無法建立connect pool")
    finally:
        createCategoryTable(cnx)
        createMrtTable(cnx)
        createViewTable(cnx)