import requests

#  Requisição do tipo GET
response = requests.get("https://www.betrybe.com/")
print(response.status_code)  # código de status
# # 200
# print(response.headers["Content-Type"])  # conteúdo no formato html
# text/html; charset=utf-8
# print(response.text)
# Bytes recebidos como resposta
# print(response.content)

# response = requests.get("http://httpbin.org/get")
# print(response.json())

# response = requests.get("https://httpbin.org/delay/10")
# print(response)

# response = requests.get("http://httpbin.org/delay/10", timeout=2)

# try:
#     # recurso demora muito a responder
#     response = requests.get("http://httpbin.org/delay/10", timeout=2)
# except requests.ReadTimeout:
#     # vamos fazer uma nova requisição
#     response = requests.get("http://httpbin.org/delay/1", timeout=2)
# finally:
#     print(response.status_code)
