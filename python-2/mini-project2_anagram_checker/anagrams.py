from anagram_checker import AnagramChecker

def MainMenu():
    while True:
        print('Welcome to my Anagram Checker!')
        print('1. Enter Word')
        print('2. Exit')

        choice = input('Please choose an option')

        if choice == "1":
            handle_input()
            continue_option = input('Would you like to continue? y/n?')
            if continue_option != "Y".lower():
                print('Goodbye!')
                break
        elif choice == "2":
            print('Thanks for playing!')
            break
        else:
            print('Please enter a valid option')    

def handle_input():
    checker = AnagramChecker()
    
    while True:
        user_input = input('Please enter a word (or type "exit" to quit to the main menu): ').lower().strip()
        if user_input == "exit":
            break
        if " " in user_input or not user_input.isalpha():
            print('Please enter a single word containing only alphabetic characters.')
            continue
        if checker.is_valid_word(user_input):
            anagrams = checker.get_anagrams(user_input)
            print(f'What you wrote: {user_input.upper()}')
            if anagrams:
                print('Here is a list of anagrams for your word:')
                print(anagrams)
            else:
                print("No anagrams found.")
        else:
            print(f"The word '{user_input}' is not a valid English word.")
        
        continue_choice = input("Would you like to check another word? (y/n): ").lower().strip()
        if continue_choice != 'y':
            break

if __name__ == "__main__":
    MainMenu()