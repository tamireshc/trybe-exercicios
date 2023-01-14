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


def tranpile_code_to_phone_number(code):
    phone_number = ""
    for element in code:
        if element == "0" or element == "1" or element == "-":
            phone_number += element
        else:
            for index in range(len(codes)):
                if re.search(element, (codes[index][0])) is not None:
                    phone_number += str(codes[index][1])
                else:
                    phone_number = phone_number
    print(phone_number)


tranpile_code_to_phone_number("1-HOME-SWEET-HOME")
tranpile_code_to_phone_number("MY-MISERABLE-JOB")
