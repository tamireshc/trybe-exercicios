# Faça um programa que receba um nome e imprima o mesmo na vertical em
# escada invertida. Exemplo:

name = input("quan seu nome?")


def invert_cascate_name(name):
    for num in range(len(name), 0, -1):
        # print(type(num))
        print(name[0:num])


invert_cascate_name(name)


# s = "tamires"
# sI = s[::-1]
# print(sI[0:5])
