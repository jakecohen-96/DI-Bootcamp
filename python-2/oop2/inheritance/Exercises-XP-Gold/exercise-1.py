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
        if not all(isinstance(account, (BankAccount, MinimumBalanceAccount)) for account in account_list):
            raise ValueError("account_list must contain only BankAccount or MinimumBalanceAccount instances")
        if not isinstance(try_limit, int) or try_limit <= 0:
            raise ValueError("try_limit must be a positive integer")
        
        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0

    def show_main_menu(self):
        while True:
            print("\nATM Main Menu")
            print("1. Log in")
            print("2. Exit")
            choice = input("Please select an option: ")

            if choice == '1':
                username = input('Please enter a username')
                password = input('Please enter password')
                self.log_in(username, password)
            elif choice == '2':
                break
            else:
                print('Invalid option')
                
    def log_in(self, username, password):
        for account in self.account_list:
            if account.authenticate(username, password):
                print(f"Welcome, {username}!")
                self.show_account_menu(account)
                return
        
        self.current_tries += 1
        if self.current_tries >= self.try_limit:
            print("Max tries reached. The system will now shut down.")
            exit()
        else:
            print(f"Incorrect credentials. You have {self.try_limit - self.current_tries} tries left.")
            username = input("Enter username: ")
            password = input("Enter password: ")
            self.log_in(username, password)

    def show_account_menu(self, account):
        while True:
            print("\nAccount Menu")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input('Please select an opton: ')
            
            if choice == '1':
                amount = int(input('Enter amount to deposit: '))
                try:
                    account.deposit(amount)
                    print(f"Deposited {amount}. New balance: {account.balance}")
                except ValueError as e:
                    print(e)
            elif choice == '2':
                amount = int(input('please enter amount to withdraw'))
                try:
                    account.withdraw(amount)
                    print(f'Withdrew {amount}. New Balance: {account.balance}')
                except ValueError as e:
                    print(e)
            elif choice == '3':
                print('thanks for coming')
                break
            else:
                print('please choose valid option')





