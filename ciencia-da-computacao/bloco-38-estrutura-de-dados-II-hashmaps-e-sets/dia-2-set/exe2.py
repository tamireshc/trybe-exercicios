def bigger_substring(word: str):
    substrings = []
    substring = ""
    biggest_len = 0

    for i in range(len(word)):
        for index, letter in enumerate(word[i:]):
            if letter not in substring and index != len(word[i:]) - 1:
                substring += letter
            elif index == len(word[i:]) - 1:
                substring += letter
                substrings.append(substring)
                substring = ""
            else:
                substrings.append(substring)
                substring = ""
                substring += letter

    for sub in substrings:
        if len(sub) > biggest_len:
            biggest_len = len(sub)

    print(substrings)

    return biggest_len


print(bigger_substring("serdevemuitolegalmasehprecisoestudarbastante"))
# print("serdevemuitolegalmasehprecisoestudarbastante"[0:])
# print("serdevemuitolegalmasehprecisoestudarbastante"[1:])
# print("serdevemuitolegalmasehprecisoestudarbastante"[2:])

# def longer_no_repeating_substring_len(string):
#     biggest = 0
#     for index, _ in enumerate(string):
#         substr = set()
#         for letter in string[index:]:
#             if letter in substr:
#                 break
#             substr.add(letter)
#         if len(substr) > biggest:
#             biggest = len(substr)
#     return biggest


# print(
#     longer_no_repeating_substring_len(
#         "serdevemuitolegalmasehprecisoestudarbastante"
#     )
# )
