from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho:
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)


class BaralhoIterador(Iterator):
    def __init__(self, Carta):
        self.naipes = "copas ouros espadas paus".split()
        self.valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()
        self.Carta = Carta
        self.current_letter = 0
        self.current_naipe = 0

    def __next__(self):
        self.current_letter += 1
        if self.current_letter >= 12:
            self.current_naipe += 1
            self.current_letter = 0
        else:
            raise StopIteration

        return Carta(
            self.valores[self.current_letter], self.naipes[self.current_naipe]
        )


class BaralhoIterable(Iterable):
    def __iter__(self):
        return BaralhoIterador(Carta)


print(next(BaralhoIterable))
