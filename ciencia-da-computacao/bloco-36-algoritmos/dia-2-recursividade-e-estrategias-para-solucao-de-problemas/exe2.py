# 🚀 Exercício 2: Transforme o algoritmo criado acima em recursivo.


def count_even_recursive(n):
    if n == 0:
        return 0
    elif n % 2 != 0:
        return count_even_recursive(n - 1)
    else:
        return (n / n) + count_even_recursive(n - 1)


print(count_even_recursive(4))
print(count_even_recursive(8))
