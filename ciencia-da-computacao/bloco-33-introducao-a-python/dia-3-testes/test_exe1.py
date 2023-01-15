import pytest
from exe1 import fizz_buzz


def test_numero_divisivel_por_3():
    assert fizz_buzz(9) == [0, 1, 2, 3, 4, 5, 6, 7, 8, "Fizz"]


def test_numero_divisivel_por_5():
    assert fizz_buzz(5) == [0, 1, 2, 3, 4, "Buzz"]


def test_numero_divisivel_por_5_e_3():
    assert fizz_buzz(30) == [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        "FizzBuzz",
    ]


def test_se_valor_nao_for_valido():
    with pytest.raises(TypeError, match="Valor inválido"):
        fizz_buzz("a")
