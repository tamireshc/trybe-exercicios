def is_primo(n):
    if n == 1:
        return False
    elif n % range == 0:
        return is_primo(n - 1)
    else:
        return True
