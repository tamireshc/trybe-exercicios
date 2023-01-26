# Faça uma requisição ao recurso usuários da API do Github
# (https://api.github.com/users), exibindo o username e url de todos os
# usuários retornados.

import requests

result = requests.get("https://api.github.com/users").json()
# print(result)

for item in result:
    print(item["login"], item["url"])
