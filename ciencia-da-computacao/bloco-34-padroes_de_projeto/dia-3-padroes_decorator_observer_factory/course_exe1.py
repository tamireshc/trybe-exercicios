# Exercícios de fixação
# Crie uma segunda classe decorator que contemple os números em inglês:
# “one”, “two”, “three”, “four”, “five”, “six”, “seven”, “eight”, “nine”, “ten”


class Calculadora:
    def soma(self, x, y):
        return x + y


class CalculadoraDecoratorEnglish:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def conversor_numero(number):
        if not isinstance(number, str):
            return number
        else:
            number_converter = {
                "zero": 0,
                "one": 1,
                "two": 2,
                "three": 3,
                "four": 4,
                "five": 5,
                "six": 6,
                "seven": 7,
                "eight": 8,
                "nine": 9,
                "ten": 10,
            }.get(number)
            return number_converter

    def soma(self, x, y):
        return self.conversor_numero(x) + self.conversor_numero(y)
