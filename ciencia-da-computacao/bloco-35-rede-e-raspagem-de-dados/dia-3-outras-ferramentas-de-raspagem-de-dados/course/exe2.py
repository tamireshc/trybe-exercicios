# Exercício 2: Imprima todos os parágrafos da página
# “https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/“.

from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By

options = webdriver.FirefoxOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)

response = firefox.get(
    "https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"
)

all_p = []

for p in firefox.find_elements(By.TAG_NAME, "p"):
    all_p.append(p.get_attribute("innerHTML"))

print(all_p)

sleep(5)

firefox.quit()
