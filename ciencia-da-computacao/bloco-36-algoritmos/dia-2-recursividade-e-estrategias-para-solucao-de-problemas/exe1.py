# 🚀 Exercício 1: Crie um algoritmo não recursivo para contar quantos números
#  pares existem em uma sequência numérica (1 a n).


def count_even(n: range):
    total_even = 0
    for item in range(1, n + 1):
        if item % 2 == 0:
            total_even += 1
        else:
            ...
    return total_even


print(count_even(2))
print(count_even(4))
print(count_even(8))


