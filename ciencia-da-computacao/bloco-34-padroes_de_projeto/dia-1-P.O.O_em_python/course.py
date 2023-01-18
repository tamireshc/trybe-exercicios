class Pet:
    def __init__(self, nome, especie, idade, humano):
        self.nome = nome
        self.especie = especie
        self.idade = idade
        self.humano = humano

    def __str__(self):  # é invocado ao dar um print
        # permite escrever comentarios em multiplas linhas
        return f""" 
      - especie do pet: {self.especie}
      - nome do pet: {self.nome}
      - idade do pet: {self.idade}
      - Pessoa responavel do pet: {self.idade}
    """


thor = Pet("thor", "gato", 5, "tamires")

print(thor)


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.ventilador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador(self, ventilador):
        self.ventilador = ventilador

    def __str__(self):
        return f""" {self.nome} possui o ventilador {self.ventilador}"""


class Ventilador:
    def __init__(self, cor, preco):
        self.cor = cor
        self.preco = preco


class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class Maquina_de_lavar(Eletrodomestico):
    pass


secador_walita = Secador("azul", 1000, 110, 60)
batedeira_arno = Batedeira("preta", 300, 110, 50)
maquina_lavar_brastempo = Maquina_de_lavar("branca", 2000, 220, 2000)

print(f'{"o preco do secador é "}', secador_walita.preco)
print(f"a cor da batedeira arno é {batedeira_arno.cor}")

batedeira_arno.cor = "amarela"

print(f"a cor da batedeira arno é {batedeira_arno.cor}")

print(
    f"""
    o preco da maquina de lavar Brastempo é
    {maquina_lavar_brastempo.preco}reias
    """
)
