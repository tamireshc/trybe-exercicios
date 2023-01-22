from abc import ABC, abstractclassmethod


class Rotinas(ABC):
    @abstractclassmethod
    def ativar(self):
        ...


class AcenterAsLuzes(Rotinas):
    def ativar():
        print("luzes acesas")


class PepararCafe(Rotinas):
    def ativar():
        print("café esta sendo preparado")


class LigarComputador(Rotinas):
    def ativar():
        print("Computador ligado")


class Perfil:
    def __init__(self):
        self.tarefas = [AcenterAsLuzes, LigarComputador]

    def adicionar_tarefas(self, tarefa: Rotinas):
        self.tarefas.append(tarefa)

    def get_tarefas(self):
        return self.tarefas


class Alarme:
    def despertar():
        tarefas = Perfil().get_tarefas()
        for tarefa in tarefas:
            tarefa.ativar()


Alarme.despertar()
