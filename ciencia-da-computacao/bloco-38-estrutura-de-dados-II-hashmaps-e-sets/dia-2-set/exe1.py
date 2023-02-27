def bluff_game(entry: dict):
    name_player1 = list(entry.keys())[0]
    name_player2 = list(entry.keys())[1]

    numbers_choose_player1 = list(entry.values())[0]
    numbers_choose_player2 = list(entry.values())[1]

    numbers_not_choose_player1 = []
    numbers_not_choose_player2 = []

    for number in range(0, 11):
        if (
            number not in numbers_choose_player1
            and number in numbers_choose_player2
        ):
            numbers_not_choose_player1.append(number)
        else:
            pass

    for number in range(0, 11):
        if (
            number not in numbers_choose_player2
            and number in numbers_choose_player1
        ):
            numbers_not_choose_player2.append(number)
        else:
            pass

    pt_player1 = max(numbers_not_choose_player2) - min(
        numbers_not_choose_player2
    )
    pt_player2 = max(numbers_not_choose_player1) - min(
        numbers_not_choose_player1
    )

    print(
        "player1",
        max(numbers_not_choose_player1),
        min(numbers_not_choose_player1),
    )
    print(
        "player2",
        max(numbers_not_choose_player2),
        min(numbers_not_choose_player2),
    )

    if pt_player1 > pt_player2:
        return name_player1
    else:
        return name_player2


print(bluff_game({"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}))
