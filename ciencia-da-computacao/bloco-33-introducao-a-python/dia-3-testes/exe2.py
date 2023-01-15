import re

codes = [
    ("ABC", 2),
    ("DEF", 3),
    ("GHI", 4),
    ("JKL", 5),
    ("MNO", 6),
    ("PQRS", 7),
    ("TUV", 8),
    ("WXYZ", 9),
]


def transpile_code_to_phone_number(code):
    phone_number = ""
    pattern = "[A-Za-z\-10]"
    for element in code:
        result = re.findall(pattern, element)
        if element == "0" or element == "1" or element == "-":
            phone_number += element
        if not len(result) > 0:
            raise TypeError("a frase contém um ou mais valores inválidos")
        else:
            for index in range(len(codes)):
                if re.search(element, (codes[index][0])) is not None:
                    phone_number += str(codes[index][1])
                else:
                    phone_number = phone_number
    print(phone_number)
    return phone_number


transpile_code_to_phone_number("1-HOME-SWEET-HOME")
transpile_code_to_phone_number("MY-MISERABLE-JOB")
