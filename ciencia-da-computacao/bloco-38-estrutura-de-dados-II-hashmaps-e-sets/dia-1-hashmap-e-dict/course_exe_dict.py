# Exercício 5: Consulte a forma de se criar um dicionário chamado de dict
#  comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu
#  dobro.


doble_dict = {num: num * 2 for num in range(3, 21)}

print(doble_dict)


# Exercício 6: Dada uma string, construa um dicionário com a contagem de cada
#  caractere da palavra. Utilize o pseudocódigo e o exemplo abaixo para se
#  nortear.


def count_char_dict_func(word: str):
    count_char_dict = {}
    for letter in word:
        if letter not in count_char_dict:
            count_char_dict[letter] = 1
        else:
            count_char_dict[letter] += 1

    return count_char_dict


print(count_char_dict_func("bbbbaaaacccaaaaaaddddddddccccccc"))


doble_and_triple_dict = {}

for num in range(3, 21):
    if num % 2 == 0:
        doble_and_triple_dict[num] = num * 2
    else:
        doble_and_triple_dict[num] = num * 3


print(doble_and_triple_dict)
