import json
import os

class AuthManager():
    def __init__(self, filename='users.json'):
        self.filename = filename
        self.users = self.load_users()

    def load_users(self):
        if os.path.exists(self.filename):
            with open(self.filename, 'r') as file:
                return json.load(file)
        else:
            return {}

    def save_user(self):
        with open(self.filename, 'w') as file:
            json.dump(self.users, file)

    def register(self, username, password):
        if username in self.users:
            print('User already exists!')
            return False
        else:
            self.users[username] = password
            self.save_user()
            print('Registration succesful!')
            return True
        

    def log_in(self, username, password):
        if username in self.users and self.users[username] == password:
            print('logged in!')
            return True
        else:
            print('username or password entered is incorrect')
            return False

