from parsel import Selector
import requests


# response = requests.get("http://books.toscrape.com/")
# print(response)
# selector = Selector(text=response.text)
# print(selector)
# titles = selector.css(".product_pod h3 a::attr(title)").getall()
# print(titles)

# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)

# URL_BASE = "http://books.toscrape.com/catalogue/"
# next_page_url = "page-1.html"
# while next_page_url:
#     # Busca o conteúdo da próxima página
#     response = requests.get(URL_BASE + next_page_url)
#     selector = Selector(text=response.text)
#     # Imprime os produtos de uma determinada página
#     for product in selector.css(".product_pod"):
#         title = product.css("h3 a::attr(title)").get()
#         price = product.css(".price_color::text").get()
#         print(title, price)
#     # Descobre qual é a próxima página
#     next_page_url = selector.css(".next a::attr(href)").get()

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# Extrai todos os preços da primeira página
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)

teste = "palavra"[3:]
print(teste)
