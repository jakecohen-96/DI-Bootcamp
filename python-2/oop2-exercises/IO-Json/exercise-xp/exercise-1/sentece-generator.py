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