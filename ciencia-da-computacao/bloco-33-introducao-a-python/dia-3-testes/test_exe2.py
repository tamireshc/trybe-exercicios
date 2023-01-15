import pytest

from exe2 import transpile_code_to_phone_number


def test_se_a_transpilacao_ocorre_corretamente():
    assert (
        transpile_code_to_phone_number("1-HOME-SWEET-HOME")
        == "1-4663-79338-4663"
    )


def test_se_a_transpilacao_contém_caracteres_invalido():
    with pytest.raises(
        TypeError, match="a frase contém um ou mais valores inválidos"
    ):
        transpile_code_to_phone_number("1-@HOME-SWEET-HOME")
