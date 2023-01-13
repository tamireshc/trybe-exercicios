nome = input("qual é seu nome?")


def name(nome):
    name_in_list = list(nome)
    for elem in name_in_list:
        print(elem)


name(nome)


number_input = input("Digite uma seguencia de numeros entre virgulas")


def sum_numbers(number_input):
    values = number_input.split(",")
    total = 0
    for item in values:
        if not item.isdigit():
            print(f"Erro ao somar valores, {item} é um valor inválido")
            return
        else:
            total += int(item)
    print(total)


sum_numbers(number_input)
