import json
import os

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
            self.users[username] = password
            self.save_user()
            print('Registration successful!')
            return True

    def log_in(self, username, password):
        if username in self.users and self.users[username] == password:
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

