from curses.ascii import isupper


def append_each_letter_of_the_word_in_a_list(word):
    list_word = []
    for letter in word:
        list_word.append(letter)
    return list_word


def return_index_of_the_uppercase_letter(word: str):
    list_word = append_each_letter_of_the_word_in_a_list(word)
    for index, letter in enumerate(list_word):
        if isupper(letter):
            print(index)
            return index


def return_element_from_list_that_is_string(input_list):
    for element in input_list:
        if type(element) == str:
            print(element)
            return element
