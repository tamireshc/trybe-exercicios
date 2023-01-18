from abc import ABC, abstractmethod


class ManipuladorDeLog(ABC):
    @abstractmethod
    @classmethod
    def log(cls, msg):
        ...


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open("msg.txt", "w") as file:
            file.write(msg)

        with open("msg.txt", "r") as file:
            msg = file.read()
            print(msg)


class Log:
    def __init(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador: LogEmArquivo | LogEmTela):
        self.__manipuladores.add(manipulador)
