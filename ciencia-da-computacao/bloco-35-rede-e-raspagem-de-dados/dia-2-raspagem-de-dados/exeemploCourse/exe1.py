# Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu
# conteúdo de forma legível.
import requests

result = requests.get("https://httpbin.org/encoding/utf8").text
print(result)
