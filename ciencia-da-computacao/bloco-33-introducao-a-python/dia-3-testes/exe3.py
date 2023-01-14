import re


def is_email(email):
    pattern = "^[a-zA-Z]\w+@\w+\.\w{3}$"
    result = re.search(pattern, email)
    print(type(result))
    print(result)
    if result is None:
        raise ValueError("Email invalido")


is_email("errad#@dominio.comj")
