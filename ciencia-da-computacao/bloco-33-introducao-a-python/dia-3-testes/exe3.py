import re


def is_email(email):
    pattern = "^[a-zA-Z]\w+@\w+\.\w{3}$"
    result = re.search(pattern, email)
    print(type(result))
    print(result)
    if result is None:
        raise ValueError("Email invalido")
    else:
        return email


# is_email("errad#@dominio.comj")
# is_email("tamires@gmail.com")
# is_email("t1_@g**.com")
# is_email("t1_@g1.com")
# is_email("1_@g1.com")
