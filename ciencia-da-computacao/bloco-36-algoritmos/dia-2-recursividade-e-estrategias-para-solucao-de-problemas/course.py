# Exercício: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber
#  um número de parâmetro e deve somar todos os números antecessores a ele.


def recursive_sum(n):
    if n == 0:
        return 0
    else:
        return n + recursive_sum(n - 1)


print(recursive_sum(4))


# def fibonacci(num):  # nome da função e parâmetro
#     if num <= 1:  # condição de parada
#         return num
#     else:
#         return fibonacci(num - 2) + fibonacci(num - 1)


# print(fibonacci(5))
