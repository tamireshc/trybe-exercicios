import pytest
from exe3 import is_email


def test_verifica_se_funcao_retorna_o_email_valido():
    assert is_email("t1_@g.com") == "t1_@g.com"


def test_verifica_se_com_website_invalido_emite_um_erro():
    """nome do website deve conter somente letras e dígitos()"""
    with pytest.raises(ValueError, match="Email invalido"):
        is_email("t1_@g**.com")


def test_verifica_se_email_com_extencao_maior_que_3_caracteres_emite_erro():
    """O tamanho máximo da extensão é de 3 caracteres."""
    with pytest.raises(ValueError, match="Email invalido"):
        is_email("t1_@g**.comx")


def test_verifica_se_email__nao_inicia_com_letras_emite_erro():
    with pytest.raises(ValueError, match="Email invalido"):
        is_email("1_@g**.comx")
