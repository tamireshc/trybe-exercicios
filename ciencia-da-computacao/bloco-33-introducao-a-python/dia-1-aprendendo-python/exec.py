# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior


def biggerNumber(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


print(biggerNumber(6, 10))

# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def media(list):
    result = 0
    for number in list:
        result += number
    med = result / len(list)
    return med


print(media([3, 4, 5]))

# Exercício 3: Faça um programa que, dado um valor n qualquer,
# tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de
#  tamanho n. Por exemplo:


def asteriscos(number):
    for row in range(number):
        print(number * "*")


print(asteriscos(5))

# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o
# nome com a maior quantidade de caracteres


def bigger_name_at_list(list):
    bigger = ""
    for name in list:
        if len(name) > len(bigger):
            bigger = name
        else:
            bigger = bigger
    return bigger


print(
    bigger_name_at_list(
        ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
    )
)


def total_ink_to_buy_and_value_to_pay(footage):
    total_paint_for_tin = 18 * 3
    for number in range(1, 1000):
        if footage < total_paint_for_tin * number:
            return (number, number * 80)
        else:
            return (number + 1, (number + 1) * 80)


print(total_ink_to_buy_and_value_to_pay(54))
print(total_ink_to_buy_and_value_to_pay(55))
print(total_ink_to_buy_and_value_to_pay(200))

# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo", caso não
# seja possível formar um triângulo.


def which_triangle_is(side1, side2, side3):
    if side1 == side2 == side3:
        return "Triângulo Equilátero"
    elif side1 == side2 or side1 == side3 or side2 == side3:
        return "Triângulo Isósceles"
    elif side1 + side2 > side3:
        return "Triângulo Escaleno"
    else:
        return " Não é Triângulo"


print(which_triangle_is(3, 3, 3))
print(which_triangle_is(3, 3, 2))
print(which_triangle_is(3, 2, 4))
print(which_triangle_is(2, 1, 4))
