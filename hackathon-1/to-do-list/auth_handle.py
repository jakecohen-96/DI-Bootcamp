import json
import os
import bcrypt


class AuthManager:
    def __init__(self, username_file='users.json', todo_file='todos.json'):
        self.username_file = username_file
        self.todo_file = todo_file
        self.users = self.load_users()
        self.todos = self.load_user_todos()

    def load_users(self):
        if os.path.exists(self.username_file):
            with open(self.username_file, 'r') as file:
                return json.load(file)
        else:
            return {}

    def save_user(self):
        with open(self.username_file, 'w') as file:
            json.dump(self.users, file)

    def register(self, username, password):
        if username in self.users:
            print('User already exists!')
            return False
        else:
            hashed_pass = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()) #using bcrypt we hash the password with a random salt
            self.users[username] = hashed_pass.decode('utf-8') # here we dcode it in order to save to the json file
            self.save_user()
            print('Registration successful!')
            return True

    def log_in(self, username, password):
        if username in self.users:
            hashed_pass = self.users[username].encode('utf-8')
            if bcrypt.checkpw(password.encode('utf-8'), hashed_pass): 
                print('Logged in!')
                return True 
        else:
            print('Username or password entered is incorrect')
            return False

    def view_users(self):
        if not self.users:
            print('No registered users found!')
            return
        else:
            print('Here is a list of all the registered users: ')
            for username in self.users:
                print(f'- {username}')

    def load_user_todos(self):
        if os.path.exists(self.todo_file):
            with open(self.todo_file, 'r') as file:
                return json.load(file)
        else:
            return {}

    def save_all_todos(self):
        with open(self.todo_file, 'w') as file:
            json.dump(self.todos, file)
     

    def save_user_todos(self, username, todo_list):
        self.todos[username] = todo_list
        self.save_all_todos()

    def change_pass(self, username, new_pass):
        if username in self.users:
            self.users[username] = new_pass
            self.save_user()
            print(f'{username} password has changed!')
            return True
        else:
            print('Incorrect user entered!')
            return False

    def change_username(self, old_username, new_username):
        if old_username in self.users:
            if new_username in self.users:
                print('Username already in use!')
                return False
            self.users[new_username] = self.users.pop(old_username)
            self.todos[new_username] = self.todos.pop(old_username, [])
            self.save_user()
            self.save_all_todos()
            print(f'Changed {old_username} to {new_username} successfully!')
        else:
            print('Old username not found!')
            return False
