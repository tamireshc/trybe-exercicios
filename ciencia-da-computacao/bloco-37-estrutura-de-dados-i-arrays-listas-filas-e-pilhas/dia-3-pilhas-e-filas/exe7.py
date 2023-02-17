def revert_only_parentheses_string(string: str):
    string1 = string.split("(")[0]
    string2 = string.split("(")[1].split(")")[0]
    string2_reverse = string2[::-1]
    # print(string1, string2, string2_reverse)
    return string1 + string2_reverse


print(revert_only_parentheses_string("teste(lagel)"))
