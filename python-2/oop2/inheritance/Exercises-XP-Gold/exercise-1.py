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
        

class MinimumBalanceAccount(BankAccount):
        def __init__(self, balance=0, minimum_balance=0):
            super().__init__(balance)
            self.minimum_balance = minimum_balance
        
        def withdraw(self, amount):
            if self.balance - amount < self.minimum_balance:
                raise ValueError("Withdrawal would go below the minimum balance")
            super().withdraw(amount)


