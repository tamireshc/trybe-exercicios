# Exercício 4: Com o Beautiful Soup, faça a extração de todos os links da
#  página “https://pt.wikipedia.org/wiki/Rock_in_Rio”


import requests
from bs4 import BeautifulSoup

url = "https://pt.wikipedia.org/wiki/Rock_in_Rio"
page = requests.get(url)

html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

list_links = []

for link in soup.find_all("a"):
    list_links.append(link.get("href"))


print(list_links)
