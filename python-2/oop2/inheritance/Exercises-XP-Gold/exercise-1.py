class BankAccount():
    def __init__(self, username, password, balance=0, authenticated=False):
        self.username = username
        self.password = password
        self.authenticated = authenticated
        self.balance = balance

    def authenticate(self, username: str, password: str):
        if (username == 'username') and (password == 'password'):
            self.authenticated = True

    def deposit(self, amount):
        if self.authenticated is True:
            if amount <= 0:
                raise ValueError("Please deposit an amount over 0")
            else:
                self.balance += amount 
        else:
            raise ('Not authenticated')

    def withdraw(self, amount):
        if self.authenticated is True:
            if amount >= 0:
                raise ValueError("Not enough cash!!")
            else:
                self.balance -= amount 
        else:
            raise ('Not authenticated')
        

class MinimumBalanceAccount(BankAccount):
        def __init__(self, balance=0, minimum_balance=0):
            super().__init__(balance)
            self.minimum_balance = minimum_balance
        
        def withdraw(self, amount):
            if self.balance - amount < self.minimum_balance:
                raise ValueError("Withdrawal would go below the minimum balance")
            super().withdraw(amount)

class atm():
    def __init__(self, account_list, try_limit):
        self.account_list = account_list
        self.try_limit = try_limit


