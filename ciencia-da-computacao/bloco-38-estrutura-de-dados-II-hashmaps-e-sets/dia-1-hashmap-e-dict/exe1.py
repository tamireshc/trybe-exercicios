from collections import Counter


def what_words_can_be_made(words: list, chars: str):
    total_COUNT = 0

    for word in words:
        word_alfabet = Counter(list(word))
        alfabet = {}
        for letter in list(word):
            if letter in chars:
                if letter not in alfabet:
                    alfabet[letter] = 1
                else:
                    alfabet[letter] += 1
        if word_alfabet == alfabet:
            print(word_alfabet)
            print(alfabet)
            total_COUNT += len(word)

    return total_COUNT


print(what_words_can_be_made(["cat", "bt", "hat", "tree"], "atach"))
print(what_words_can_be_made(["hello", "world", "students"], "welldonehoneyr"))
