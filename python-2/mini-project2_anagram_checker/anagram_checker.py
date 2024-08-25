class AnagramChecker:
    def __init__(self):
        with open('sowpods.txt', 'r') as file:
            self.words = [line.strip().lower() for line in file]

    def is_valid_word(self, word: str) -> bool:
        return word in self.words
        

    def get_anagrams(self, word: str) -> list[str]:
        return [w for w in self.words if self.is_anagram(word, w) and w != word]
        

    def is_anagram(self, word1: str, word2: str) -> bool:
        return sorted(word1) == sorted(word2)
        