class Conjunto:
    def __init__(self):
        self.lista = [False for i in range(0, 1001)]

    def add(self, item):
        self.lista[item] = item

    def __str__(self):
        set_item = set(self.lista)
        set_item_unique = set()
        for item in set_item:
            if item:
                set_item_unique.add(item)
        return str(set_item_unique)

    def __contains__(self, item):
        if item in self.lista:
            return True
        else:
            return False

    def union(self, conjuntoB):
        conjuntoC = Conjunto()
        conjuntoC.lista = self.lista + conjuntoB.lista
        return conjuntoC

    def intersection(self, conjuntoB):
        conjuntoC = Conjunto()
        conjuntoC.lista = set(conjuntoB.lista).intersection(set(self.lista))
        return conjuntoC


if __name__ == "__main__":
    conjunto1 = Conjunto()
    conjuntoA = Conjunto()
    conjuntoB = Conjunto()

conjunto1.add(1)
conjunto1.add(2)
conjunto1.add(3)

for i in range(1, 11):
    conjuntoA.add(i)

for i in range(10, 21):
    conjuntoB.add(i)

print(conjunto1)
print(conjuntoA)
print(conjuntoB)

print(conjuntoA.union(conjuntoB))
print(conjuntoA.intersection(conjuntoB))
