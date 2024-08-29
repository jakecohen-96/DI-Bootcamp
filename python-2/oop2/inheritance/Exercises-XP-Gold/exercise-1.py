class BankAccount():
    def __init__(self, balance = 0):
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Please deposit an amount over 0")
        else:
           self.balance += amount 

    def withdraw(self, amount):
        if amount >= 0:
            raise ValueError("Not enough cash!!")
        else:
           self.balance -= amount 
        