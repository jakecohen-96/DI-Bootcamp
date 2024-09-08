import psycopg2

HOSTNAME = '127.0.0.1'
USERNAME = 'jake'
PASSWORD = 'root'
DATABASE = 'hollywood'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)

cursor = connection.cursor()

query = "SELECT * FROM actors LIMIT 7;"

cursor.execute(query)

results = cursor.fetchall()

for row in results:
    print(row)

connection.close()