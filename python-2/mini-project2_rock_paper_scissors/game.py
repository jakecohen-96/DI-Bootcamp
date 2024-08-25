import random

class game():
    def get_user_item(self):
        while True:
            user_choice = input('Please select (R)ock, (P)aper, or (S)cissors: ')
            if user_choice in ["R", "S", "P"]:
                if user_choice == "R":
                    return 'Rock'
                elif user_choice == "S":
                    return 'Scissors'
                elif user_choice == "P":
                    return 'Paper'
                else:
                    print('Please enter a valid option')
                    
    def get_computer_item(self):
        choices = ['rock', 'paper', 'scissors']
        computer_choice = random.choices(choices)
        return computer_choice