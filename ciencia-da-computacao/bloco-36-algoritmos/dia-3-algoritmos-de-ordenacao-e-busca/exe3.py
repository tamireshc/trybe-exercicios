from Cronometro import Cronometro
from random import shuffle
from ord_selecao import selection_sort
from ord_insercao import insertion_sort


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


with Cronometro(selection_sort):
    selection_sort(ordenados)
# <function selection_sort at 0x1031ff670> demorou 0.00020199999999999906 segundos
with Cronometro(selection_sort):
    selection_sort(inversamente_ordenados)
# <function selection_sort at 0x1045e8550> demorou 0.00021416699999999948 segundos
with Cronometro(selection_sort):
    selection_sort(aleatorios)
# <function selection_sort at 0x1045e8550> demorou 0.00021000000000000012 segundos
with Cronometro(selection_sort):
    selection_sort(shuffle(aleatorios))
# <function selection_sort at 0x1045e8550> demorou 2.716700000000155e-05 segundos
