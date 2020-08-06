import pymysql
db = pymysql.connect(host='localhost',user ='root',password='bjinko01',port=3306)
cursor = db.cursor()
# cursor.execute('SELECT VERSION()')
# data = cursor.fetchone()
# print('Database version:',data)
# cursor.execute("CREATE DATABASE spiders DEFAULT CHARACTER SET utf8")
# db.close()

sql = 'CREAT TABLE IF NOT EXISTS students (id VARCHAR(255) NOT NULL,name VARCHAR(255) NOT NULL,age INT NOT NULL,PRIMARY KEY (id))'
cursor.execute(sql)
db.close()
