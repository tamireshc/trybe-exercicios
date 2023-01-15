import pytest
from exe4 import is_email_at_list


def test_verifica_se_funcao_retorna_uma_lista_de_email_validos():
    assert is_email_at_list(["nome@dominio.com", "outro@dominio.com"]) == [
        "nome@dominio.com",
        "outro@dominio.com",
    ]


def test_verifica_se_uma_lista_com_um_website_invalido_emite_um_erro():
    """nome do website deve conter somente letras e dígitos"""
    with pytest.raises(ValueError, match="Email invalido"):
        is_email_at_list(
            ["nome@dominio.com", "outro@dominio.com", "t1_@g**.com"]
        )


def test_verifica_se_lista_possui_extencao_incorreta_emite_erro():
    """O tamanho máximo da extensão é de 3 caracteres."""
    with pytest.raises(ValueError, match="Email invalido"):
        is_email_at_list(
            ["nome@dominio.com", "outro@dominio.com", "t1_@g**.comx"]
        )


def test_verifica_se_lista_possui_email__nao_inicia_com_letras_emite_erro():
    with pytest.raises(ValueError, match="Email invalido"):
        is_email_at_list(
            ["nome@dominio.com", "outro@dominio.com", "1_@g**.comx"]
        )
