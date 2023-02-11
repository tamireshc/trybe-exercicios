# 🚀 Exercício 3: Crie um algoritmo recursivo que encontre,
#  em uma lista, o maior número inteiro.


def bigger_int_at_list(list_int: list):
    if len(list_int) == 1:
        return list_int[0]
    if list_int[0] < list_int[1]:
        list_int.pop(0)
        return bigger_int_at_list(list_int)
    else:
        list_int.pop(1)
        return bigger_int_at_list(list_int)


print(bigger_int_at_list([1, 9, 5, 45, 3]))
