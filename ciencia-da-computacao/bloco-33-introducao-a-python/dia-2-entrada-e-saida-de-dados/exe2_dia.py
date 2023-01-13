# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária
# tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente. O
# jogador terá três tentativas para adivinhar a palavra. Ao final,
# a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu
# o jogo

import random


word_select = random.choice(["jocoso", "adjetivo", "hormonio"])

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
