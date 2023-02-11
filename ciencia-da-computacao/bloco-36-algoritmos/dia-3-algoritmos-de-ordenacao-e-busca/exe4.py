from Cronometro import Cronometro
from merge_sort import merge_sort
from buble_sort import bubble_sort
from random import shuffle


ordenados = list(range(10000))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]
shuffle(aleatorios)

# with Cronometro(merge_sort):
#     merge_sort(shuffle(aleatorios))
# <function merge_sort at 0x103319940> demorou 0.002435874999999997 segundos

with Cronometro(bubble_sort):
    bubble_sort(shuffle(aleatorios))
# <function bubble_sort at 0x102b05ca0> demorou 0.002329082999999999 segundos
