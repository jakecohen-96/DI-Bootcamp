import random

def get_words_from_file():
    with open('sowpods.txt', 'r') as file:
        words = file.read().splitlines
    return words

def get_random_sentence(length):
    words = get_words_from_file()
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words).lower()
    return sentence

def main():
    print('Welcome to the Random Sentence Generator! Please enter the length of you random sentence')
    try:
        length = len(input('Please enter a number between 2 and 20'))
        if 2>= length <= 20:
            sentence = get_random_sentence(length)
            print(f'Here is your sentence: {sentence}')
        else:
            print('Invalid amount given')
    except ValueError:
        print('Invalid character, please enter numbers only')
        
