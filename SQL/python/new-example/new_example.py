# CRUD (CREATE, READ, UPDATE, DELETE)

# 1. create virtual enviroment
# 2. activate virtual env
# 3. install dependancies
# 4. start coding
#   a. write function to create table
#   b. write function to insert data
#   x. write a function READ
#   x. write a function UPDATE
#   x. write a function DELETE

#   x. write a MAIN function to RUN

# first name
# last name
# birthdate
# tz
# favorite_color

import sqlite3
from tabulate import tabulate

def create_table(): 
    create_student_table = ''' CREATE TABLE IF NOT EXISTS
    person_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birthdate DATE,
    tz VARCHAR(10),
    favorite_color VARCHAR(30)'''

    try:
        with sqlite3.connect('student.db') as conn:
            cursor = conn.cursor()
            cursor.execute(create_student_table)
            conn.commit()
            conn.close()
    except sqlite3.Error as e:
        print(e)

#
