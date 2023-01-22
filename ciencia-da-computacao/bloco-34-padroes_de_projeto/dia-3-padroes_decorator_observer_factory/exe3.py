from abc import ABC, abstractmethod


class Account(ABC):
    @abstractmethod
    def count_return():
        ...


class SuporteAccount(Account):
    def count_return():
        return "suporte"


class VendasAccount(Account):
    def count_return():
        return "vendas"


class GerenteAccount(Account):
    def count_return():
        return "gerente"


class CriarAcesso(ABC):
    def __init__(self):
        self.acessos = []
        self.criar_acesso()

    @abstractmethod
    def criar_acesso(self):
        ...

    def adicionar_acesso(self, account):
        self.acessos.append(account)

    def exibir_acessos_do_perfil(self):
        frase = ""
        for acesso in self.acessos:
            frase += acesso.count_return()
            frase += " "
        print(f"essa conta possui acesso de {frase}")


class CriarAcessoDeSuporte(CriarAcesso):
    def criar_acesso(self):
        self.adicionar_acesso(SuporteAccount)


class CriarAcessoDeSuporteEVendas(CriarAcesso):
    def criar_acesso(self):
        self.adicionar_acesso(SuporteAccount)
        self.adicionar_acesso(VendasAccount)


class CriarAcessoDeGerente(CriarAcesso):
    def criar_acesso(self):
        self.adicionar_acesso(SuporteAccount)
        self.adicionar_acesso(VendasAccount)
        self.adicionar_acesso(GerenteAccount)


CriarAcessoDeSuporte().exibir_acessos_do_perfil()
CriarAcessoDeSuporteEVendas().exibir_acessos_do_perfil()
CriarAcessoDeGerente().exibir_acessos_do_perfil()
