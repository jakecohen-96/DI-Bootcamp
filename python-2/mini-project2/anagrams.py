from anagram_checker import AnagramChecker

def MainMenu():
    while True:
        print('Welcome to my Anagram Checker!')
        print('1. Enter Word')
        print('2. Exit')

        choice = input('Please choose an option')

        if choice == "1":
            pass
            handle_input()
        elif choice == "2":
            print('Thanks for playing!')
            break
        else:
            print('Please enter a valid option')    

