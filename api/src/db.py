import mysql.connector

cnx = mysql.connector.connect(
    user='root',
    password='root',
    database='fff-interview',
    host='mysql',
    port='3306'
)


def getUserCount():
    cursor = cnx.cursor()

    query = ("SELECT COUNT(*) FROM users")
    cursor.execute(query)
    count = cursor.fetchone()[0]

    cursor.close()

    return count
