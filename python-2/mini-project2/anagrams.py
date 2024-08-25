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
            if continue_option != "Y":
                print('Goodbye!')
                break
        elif choice == "2":
            print('Thanks for playing!')
            break
        else:
            print('Please enter a valid option')    

def handle_input():
    checker = AnagramChecker()
    user_input = input('Please enter a word!').lower().strip()

    if " " in user_input:
        print('Please enter a valid word')
        return
    if checker.is_valid_word(user_input):
        anagrams = checker.get_anagrams(user_input)
        print(f'What you wrote:  {user_input.upper()}' )
        print('Here is a list of anagrams for your word: ')
        print(f'{', '.join(anagrams) if anagrams else 'No anagrams found.'}')
    else:
        print(f"The word '{user_input}' is not a valid English word.")

if __name__ == "__main__":
    MainMenu()