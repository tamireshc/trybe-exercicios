# Boas Vindas ao repositório de Introdução à Python

## Neste repositório você vai encontrar exercícios para treinar conceitos iniciais à linguagem Python.

<br>

## Como posso começar?
<details>
<summary> Passo a Passo </summary>

1. Tenha o Python instalado em sua máquina ([guia aqui](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/aa76abc8-b842-40d9-b5cc-baa960952129/lesson/3f79a20e-f527-4871-b69b-544310cfbda0 "Guia de configuração de ambiente Python")), caso tenha dúvidas sobre esse ponto, poste no canal da turma e o time responsável irá te ajudar aqui. 

> Para nossos exercícios, você precisará dos itens [🐍 Python], [🚚 Pip] e [📚 Venv]

2. Crie o ambiente virtual que será utilizado para instalar as dependências

```bash
python3 -m venv .venv
```

3. Ative o ambiente virtual que foi criado

```bash
source .venv/bin/activate
```

4. Instale os requerimentos deste repositório 

```bash
python3 -m pip install -r dev-requirements.txt
```

5. Execute todos os testes do repositório (note que, enquanto não houver implementação nas funções, os testes falharão!)

```bash
python3 -m pytest
```

6. Execute os testes de um arquivo específico (note que, enquanto não houver implementação nas funções, os testes falharão!)

```bash
python3 -m pytest tests/<caminho/para/o/arquivo/de/teste>
```

7. Execute apenas um teste específico de um arquivo específico (note que, enquanto não houver implementação nas funções, os testes falharão!)

```bash
python3 -m pytest tests/<caminho/para/o/arquivo/de/teste>::<nome_da_função_do_teste>
```

</details>

---

<br>


# Detalhamento sobre os exercícios

<details>

<summary> Operações Básicas </summary>
<br>

## Se quiser ler sobre esse tópico você pode acessar [esta página aqui](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/b436f9e0-dfde-4a16-9bad-82f0c559dd45/day/bee44ac6-0782-48cd-9ce8-1811980e558e/lesson/71641e4a-4804-43d0-b91c-b6c0c8724013)

### Os exercícios relacionados às operações básicas na linguagem `Python` estão localizados no arquivo `exercises/basic_operations.py` e o que se espera de cada um destes exercícios está detalhado abaixo:


<br>

1. A função abaixo deve receber dois números e retornar o valor correspondente à soma dos mesmos.

```python
def basic_sum(first_number, second_number):
    return 
```

2. A função abaixo deve receber dois números e retornar o valor correspondente à diferença do primeiro número em relação ao segundo.

```python
def basic_difference(first_number, second_number):
    return 
```

3. A função abaixo deve receber dois números e retornar o valor correspondente ao produto dos mesmos.

```python
def basic_product(first_number, second_number):
    return 
```

4. A função abaixo deve receber dois números e retornar o valor correspondente à divisão do primeiro com o segundo número.

```python
def basic_division(first_number, second_number):
    return 
```

5. A função abaixo deve receber dois números e retornar o valor correspondente à divisão inteira (quociente) do primeiro com o segundo número.

```python
def basic_integer_division(first_number, second_number):
    return 
```

6. A função abaixo deve receber dois números e retornar o valor correspondente ao resto da divisão entre o primeiro e o segundo número.

```python
def basic_remainder(first_number, second_number):
    return 
```

7. A função abaixo deve receber dois números e retornar o valor correspondente ao primeiro número elevado ao segundo.

```python
def basic_potentiation(first_number, second_number):
    return 
```

</details>

---

<br>
<details>

<summary> Tipos de Dados em Python </summary>
<br>


## Se quiser ler sobre esse tópico você pode acessar [esta página aqui](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/b436f9e0-dfde-4a16-9bad-82f0c559dd45/day/bee44ac6-0782-48cd-9ce8-1811980e558e/lesson/358c149a-b1cb-4c04-bb05-508f17e20b50)

### Os exercícios relacionados aos tipos de dados no `Python` estão localizados no arquivo `exercises/python_data_types.py` e o que se espera de cada um destes exercícios está detalhado abaixo:


<br>

1. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo booleano.

```python
def is_bool(value):
    return 
```

2. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo inteiro.

```python
def is_int(value):
    return 
```

3. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo float.

```python
def is_float(value):
    return  
```

4. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo string.

```python
def is_string(value):
    return 
```

5. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo lista.

```python
def is_list(value):
    return 
```

6. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo tupla.

```python
def is_tuple(value):
    return 
```

7. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo conjunto.

```python
def is_set(value):
    return 
```

8. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo dicionário.

```python
def is_dict(value):
    return 
```

9. A função abaixo recebe uma string genérica como parâmetro e deve retornar a mesma string, no entanto, todos os caracteres maiúsculos devem ser convertidos em minúsculos.

```python
def return_lower_case_string(word):
    return 
```

10. A função abaixo recebe um elemento e uma lista como parâmetros e deve retornar a mesma lista, mas agora contendo o elemento em sua última posição.

```python
def append_element_in_list(element, input_list):
    return 
```

11. A função abaixo recebe um elemento e uma lista como parâmetros e deve retornar a mesma lista, mas agora removendo o elemento passado como parâmetro.

```python
def remove_element_from_list(element, input_list):
    return 
```

12. A função abaixo recebe uma chave, um valor e um dicionário como parâmetros e deve retornar o mesmo dicionário contendo o novo par chave: valor.

```python
def create_new_key_value_in_dict(key, value, input_dict):
    return 
```

13. A função abaixo recebe uma chave e um dicionário como parâmetros e deve retornar o mesmo  dicionário, mas agora removendo a chave passada como parâmetro.

```python
def delete_key_from_dict(key, input_dict):
    return 
```

14. A função abaixo recebe um elemento e um conjunto como parâmetros e deve retornar o mesmo conjunto contendo o elemento.

```python
def add_element_to_set(element, input_set):
    return 
```

15. A função abaixo recebe um elemento e um conjunto como parâmetros e deve retornar o mesmo conjunto removendo o elemento passado como parâmetro

```python
def remove_element_from_set(element, input_set):
    return 
```


</details>

---

<br>
<details>

<summary> Condicionais </summary>
<br>


## Se quiser ler sobre esse tópico você pode acessar [esta página aqui](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/b436f9e0-dfde-4a16-9bad-82f0c559dd45/day/bee44ac6-0782-48cd-9ce8-1811980e558e/lesson/e26f6616-26e5-442c-b6f2-8cd7868035f1)

### Os exercícios relacionados às estruturas condicionais no `Python` estão localizados no arquivo `exercises/conditionals.py`. Pode ser que você encontre uma resolução para estes exercícios que não necessite de uma estrutura condicional `(ifs)`, contudo, para fins didáticos, recomenda-se sua utilização. O que se espera de cada um destes exercícios está detalhado abaixo:


<br> 

1. A função abaixo deve verificar se a string passada como parâmetro possui 4 ou mais caracteres, em caso positivo, deve retornar `True`, em caso negativo, retornar `False`.

```python
def check_if_word_has_4_or_more_letters(word):
    return 
```

2. A função abaixo recebe dois números como parâmetros e deve retornar aquele que é maior entre eles, em caso de igualdade, o retorno pode ser qualquer um dos dois.

```python
def check_what_number_is_greater(first_number, second_number):
    return 
```

3. A função abaixo deve verificar se o número recebido como parâmetro é par ou ímpar. Caso seja par, a função deve retornar `"even"`, caso seja ímpar, deve retornar `"odd"`.

```python
def check_if_number_is_odd_or_even(number):
    return 
```

4. A função abaixo recebe um elemento e uma lista como parâmetros e deve verificar se o elemento está contido na lista, em caso positivo, deve retornar `True`, em caso negativo, retornar `False`.

```python
def check_if_element_exists_in_list(element, input_list):
    return 
```

</details>

---

<br>
<details>

<summary> Repetição </summary>
<br>


## Se quiser ler sobre esse tópico você pode acessar [esta página aqui](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/b436f9e0-dfde-4a16-9bad-82f0c559dd45/day/bee44ac6-0782-48cd-9ce8-1811980e558e/lesson/f9dfc461-b7f6-40cb-881d-b18abe2880d3)

### Os exercícios relacionados às estruturas de repetição na linguagem `Python` estão localizados no arquivo `exercises/repetition.py`. Pode ser que você encontre uma resolução para estes exercícios que não necessite de uma estrutura de repetição `(for, while)`, contudo, para fins didáticos, recomenda-se sua utilização. O que se espera de cada um destes exercícios está detalhado abaixo:

<br>


1. A função abaixo recebe uma string como parâmetro e deve retornar uma lista contendo cada um dos caracteres da string. A ordem dos caracteres na lista deve ser a mesma ordem da string.

```python
def append_each_letter_of_the_word_in_a_list(word):
    return 
```

2. A função abaixo recebe uma string genérica que tem apenas uma letra maiúscula como parâmetro. A função deve retornar o número que corresponde ao índice (posição) da letra maiúscula na string.

```python
def return_index_of_the_uppercase_letter(word):
    return
```

3. A função abaixo recebe uma lista como parâmetro na qual apenas um de seus elementos é uma string. A função deve retornar esse elemento.

```python
def return_element_from_list_that_is_string(input_list):
    return 
```

</details>

---

## Qualquer dúvida ou problema, basta postar no canal do slack da turma ou procurar o time de instrução responsável 😊, bons estudos!
