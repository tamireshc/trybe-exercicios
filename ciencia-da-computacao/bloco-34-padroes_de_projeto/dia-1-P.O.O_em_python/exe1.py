class Televisor:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume > 1 and self.__volume < 99:
            self.__volume += 1
        else:
            self.__volume = self.__volume

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        else:
            self.__volume = self.__volume

    def modificar_canal(self, canal):
        if self.__canal >= 1 or self.__canal <= 99:
            self.__canal = canal
        else:
            raise ValueError("canal inválido")

    def ligar_desligar(self):
        if self.__ligada:
            self.__ligada = False
        else:
            self.__ligada = True
