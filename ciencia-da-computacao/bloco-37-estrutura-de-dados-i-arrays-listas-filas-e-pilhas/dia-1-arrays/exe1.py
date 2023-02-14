# 1 - OK
# 0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1]
resultado = 4


def max_time_stable(array: list):
    index_of_zeros = []
    array_instable_time = []

    for index, item in enumerate(array):
        if item == 0:
            idx = index
            index_of_zeros.append(idx)
        else:
            pass
    index_of_zeros.append(len(array))

    if index_of_zeros[0] == 0:
        for index, item in enumerate(index_of_zeros):
            if index < (len(index_of_zeros) - 1):
                array_instable_time.append(
                    index_of_zeros[index + 1] - index_of_zeros[index] - 1
                )
            else:
                pass
    else:
        array_instable_time.append(index_of_zeros[0])
        for index, item in enumerate(index_of_zeros):
            if index < (len(index_of_zeros) - 1):
                array_instable_time.append(
                    index_of_zeros[index + 1] - index_of_zeros[index] - 1
                )
            else:
                pass

    return array_instable_time

    # count = []
    # idx = 0
    # for item in array:
    #     if item == 1:
    #         count.insert(idx, 1)
    #     else:
    #         idx += 1
    # return max(count) + 1


print(max_time_stable([0, 1, 1, 1, 0, 0, 1, 1]))
print(max_time_stable([1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1]))
print(max_time_stable([1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1]))
print(max_time_stable([0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1]))
# Results:
# [3, 0, 2]
# [4, 0, 2]
# [4, 0, 2, 0, 2, 5]
# [3, 0, 2, 0, 2, 5]
