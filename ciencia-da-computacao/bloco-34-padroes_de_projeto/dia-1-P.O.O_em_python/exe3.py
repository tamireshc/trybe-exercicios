from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        ...

    @abstractmethod
    def perimetro(self):
        ...


class Quadrado(FiguraGeometrica):
    def __init(self, lado):
        self.__lado = lado

    def area(self):
        return self.__lado * self.__lado

    def perimetro(self):
        return 4 * self.__lado


class Retangulo(FiguraGeometrica):
    def __init__(self, lado1, lado2):
        self.__lado1 = lado1
        self.__lado2 = lado2

    def area(self):
        return self.__lado1 * self.__lado2

    def perimetro(self):
        return (2 * self.__lado1) + (2 * self.__lado2)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.__raio = raio

    def area(self):
        return 3.14 * self.__raio

    def perimetro(self):
        return 2 * 3, 14 * self.__raio
