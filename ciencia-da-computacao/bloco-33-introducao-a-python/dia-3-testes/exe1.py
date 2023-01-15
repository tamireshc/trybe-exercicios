def fizz_buzz(number):
    list_dsc_numbers = []
    if type(number) is not int:
        raise TypeError("Valor inválido")
    elif number % 5 == 0 and number % 3 == 0:
        for n in range(number):
            list_dsc_numbers.append(n)
        list_dsc_numbers.append("FizzBuzz")
        print(list_dsc_numbers)
        return list_dsc_numbers
    elif number % 3 == 0:
        for n in range(number):
            list_dsc_numbers.append(n)
        list_dsc_numbers.append("Fizz")
        print(list_dsc_numbers)
        return list_dsc_numbers
    elif number % 5 == 0:
        for n in range(number):
            list_dsc_numbers.append(n)
        list_dsc_numbers.append("Buzz")
        print(list_dsc_numbers)
        return list_dsc_numbers
    else:
        for n in range(number):
            list_dsc_numbers.append(n)
        print(list_dsc_numbers)
        return list_dsc_numbers


fizz_buzz(30)
