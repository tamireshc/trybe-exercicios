from abc import ABC, abstractmethod


class imposto(ABC):
    @abstractmethod
    def calcular_imposto(self, valor):
        ...


class Iss:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self):
        return self.valor * 0.1


class Icms:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self):
        return self.valor * 0.06


class Pis:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self):
        return self.valor * 0.0065


class Cofins:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self):
        return self.valor * 0.03


class Orcamento:
    def __init__(self, valor, imposto):
        self.valor = valor
        self.imposto = imposto

    def valor_imposto(self):
        return self.imposto(self.valor).calcular_imposto()


orcamentoISS = Orcamento(1000, Iss)
orcamentoICMS = Orcamento(1000, Icms)
orcamentoCOFINS = Orcamento(1000, Cofins)
orcamentoPIS = Orcamento(1000, Pis)
print(f"ISS: {orcamentoISS.valor_imposto()}")
print(f"ICMS: {orcamentoICMS.valor_imposto()}")
print(f"PIS: {orcamentoCOFINS.valor_imposto()}")
print(f"COFINS: {orcamentoPIS.valor_imposto()}")
