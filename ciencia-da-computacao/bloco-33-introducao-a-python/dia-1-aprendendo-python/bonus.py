# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo,
#  [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def smaller_number_at_list(list):
    smaller = list[0]
    for number in list:
        if smaller > number:
            smaller = number
        else:
            smaller = smaller
    return smaller


print(smaller_number_at_list([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
#  imprima na tela um triângulo retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def drawTriangle(n):
    for number in range(1, n + 1):
        print(number * "*")


print(drawTriangle(5))
# Exercício 3: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N. Por exemplo, para N = 5,
# o valor esperado será 15.


def sum_one_at_number(number):
    sum = 0
    for num in range(number + 1):
        sum += num
    return sum


print(sum_one_at_number(5))
# Exercício 4: Um posto está vendendo combustíveis
# com a seguinte tabela de descontos:


def total_to_pay_for_fuel(liter, type):
    value_liter_gasoline = 2.5
    value_liter_alcohol = 1.9
    if type == "A" and liter <= 20:
        return liter * value_liter_alcohol * 0.97
    elif type == "A" and liter >= 20:
        return liter * value_liter_alcohol * 0.95
    elif type == "G" and liter <= 20:
        return liter * value_liter_gasoline * 0.96
    elif type == "G" and liter >= 20:
        return liter * value_liter_gasoline * 0.94


print(total_to_pay_for_fuel(10, "A"))  # 18.43
print(total_to_pay_for_fuel(30, "A"))  # 54.15

print(total_to_pay_for_fuel(10, "G"))  # 24
print(total_to_pay_for_fuel(30, "G"))
