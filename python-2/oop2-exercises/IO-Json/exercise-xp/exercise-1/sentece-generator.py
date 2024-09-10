def get_words_from_file():
    with open('sowpods.txt', 'r') as file:
        words = file.read().splitlines
    return words