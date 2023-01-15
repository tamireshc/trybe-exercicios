# Modifique o exercício anterior para que as palavras sejam lidas
# de um arquivo.
#  Considere que o arquivo terá cada palavra em uma linha.
import random

list_word = []

words = open("palavras.txt", "r")
for item in words:
    list_word.append(item.replace("\n", ""))

print(list_word)
word_select = random.choice(list_word)
print(word_select)

scrambled_word = "".join(random.sample(word_select, len(word_select)))

print(f"Qua palavra é esta?-{scrambled_word}- adivinhe em 3 tentativas")

firt_chanse = input("primeira tentativa")
second_chanse = input("segunda tetativa")
third_chanse = input("terceira tentativa")


def check_answers(firt_chanse, second_chanse, thid_chanse):
    if (
        firt_chanse == word_select
        or second_chanse == word_select
        or thid_chanse == word_select
    ):
        print(f"vc acertou a palavra é {word_select}")
    else:
        print(f"vc errou a palavra é {word_select}")


check_answers(firt_chanse, second_chanse, third_chanse)
