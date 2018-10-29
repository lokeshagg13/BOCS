import sqlite3 as sq
conn = sq.connect('ratings.db')

conn.execute("CREATE TABLE if not exists Rate (Name TEXT,Email Text,Age Int,Country Text,ID Text,UR Real,Review Text)")

conn.close()
