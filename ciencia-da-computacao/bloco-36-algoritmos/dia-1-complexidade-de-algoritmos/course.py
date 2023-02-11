# Exercício 1: Qual é a Ordem de Complexidade (complexidade de tempo) do
#  algoritmo abaixo? E a complexidade de espaço?
from datetime import datetime


def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result


# Tempo 0(n)
# Espaco 0(1)

# Exercício 2: Meça o tempo de execução do algoritmo acima e, mudando o
#  tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o
# tempo de execução aumenta em n² vezes!


def multiply_arrays(array1, array2):
    initial_time = datetime.now()
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    final_time = datetime.now()
    return final_time - initial_time


print(
    multiply_arrays(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ),
    "5 elementos",
)
# print(
#     multiply_arrays(
#         list(range(0, 1000)),
#         list(range(0, 1000)),
#     ),
#     "1000 elementos",
# )
