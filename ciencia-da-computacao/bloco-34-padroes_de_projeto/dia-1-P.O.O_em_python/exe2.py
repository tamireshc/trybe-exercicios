from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, list_numbers):
        return int(sum(list_numbers) / len(list_numbers))

    @classmethod
    def mediana(cls, list_numbers: list):
        order_list_numbers = sorted(list_numbers)
        print(order_list_numbers)

        if len(list_numbers) % 2 == 0:
            index = len(list_numbers) // 2
            return (
                order_list_numbers[index] + order_list_numbers[index - 1]
            ) / 2

        else:
            index = len(list_numbers) // 2
            return order_list_numbers[index]

    @classmethod
    def moda(cls, list_numbers):
        print(Counter(list_numbers))
        return Counter(list_numbers).most_common()[0][0]


estatisticas = Estatistica()
print(estatisticas.media([3, 2, 1]))
print(estatisticas.mediana([1, 3, 8]))
print(estatisticas.mediana([6, 4, 7, 2]))
print(estatisticas.mediana([6, 7, 2, 1, 8]))
print(estatisticas.moda([2, 23, 4, 2, 5]))
