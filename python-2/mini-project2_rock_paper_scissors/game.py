import random

class play():
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
        def get_computer_item(self):
            choices = ['rock', 'paper', 'scissors']
            computer_choice = random.choice(choices)
            return computer_choice
    
    def get_game_result(self, user_choice: str, computer_choice: str) -> str:
        if user_choice == computer_choice:
            print('It is a draw!')

        if (user_choice == 'rock' and computer_choice == 'scissors') or (user_choice == 'paper' and computer_choice == 'rock') or (user_choice == 'scissors' and computer_choice == 'paper'):
            return "You won! One point! for you" 
        
        return "loss"
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f'You slected {user_item}, Computer chose {computer_item} Result: {result}')
        return result