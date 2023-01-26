# Baseando-se em uma página contendo detalhes sobre um livro
# (http://books.toscrape.com/catalogue/the-grand-design_405/index.html),
#  faça a extração dos campos título, preço, descrição e url contendo a image
#  de capa do livro.

import requests
from parsel import Selector

BASE_URL = "http://books.toscrape.com"

response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(text=response.text)
title = selector.css(".product_main h1::text").get()
price = selector.css(".price_color::text").re_first(r"\d+\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
description = description[: -len("...more")]
url_image = selector.css(".thumbnail div div img::attr(src)").get()[5:]
final_url_image = BASE_URL + url_image
print(f"{title}, {price}, {description}, {final_url_image}")
