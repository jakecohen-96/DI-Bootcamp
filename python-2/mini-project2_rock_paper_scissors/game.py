import random

class play:
    def get_user_item(self):
        while True:
            user_choice = input('Please select (R)ock, (P)aper, or (S)cissors: ').strip().upper()
            if user_choice in ["R", "S", "P"]:
                if user_choice == "R":
                    return 'rock'
                elif user_choice == "S":
                    return 'scissors'
                elif user_choice == "P":
                    return 'paper'
            else:
                print('Please enter a valid option')

    def get_computer_item(self):
        choices = ['rock', 'paper', 'scissors']
        computer_choice = random.choice(choices)
        return computer_choice 

    def get_game_result(self, user_item: str, computer_item: str) -> str:
        if user_item == computer_item:
            return "draw"
        
        if user_item == "rock" and computer_item == "scissors":
            return "win"
        elif user_item == "paper" and computer_item == "rock":
            return "win"
        elif user_item == "scissors" and computer_item == "paper":
            return "win"
        else:
            return "loss"
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()  # This should return a string, not a list
        result = self.get_game_result(user_item, computer_item)
        print(f'You selected {user_item.capitalize()}, Computer chose {computer_item}. Result: {result}')
        return result