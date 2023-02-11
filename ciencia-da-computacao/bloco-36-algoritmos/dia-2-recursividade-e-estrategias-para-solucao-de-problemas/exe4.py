# 🚀 Exercício 4: Escreva um algoritmo recursivo para encontrar
#  o máximo divisor comum (mdc) de dois inteiros.


def MDC(num1, num2):
    if num1 and num2 == 1:
        return 0
    elif num1 % range(num1, 2, -1) and num2 % (num2 - 1) == 0:
        num1 = num1 / (num1 - 1)
        num2 = num2 / (num2 - 1)
        return (num1 - 1) * MDC(num1, num2)
    elif num1 % (num1 - 1) == 0:
        num1 = num1 / (num1 - 1)
        return MDC(num1, num2)
    elif num2 % (num2 - 1) == 0:
        num2 = num2 / (num2 - 1)
        return MDC(num1, num2)


print(MDC(10, 24))
