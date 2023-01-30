# Exercício 1: Com o Selenium, faça uma requisição para o endpoint
# “https://quotes.toscrape.com/“ e imprima a primeira citação que aparece na
#  página.

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

response = firefox.get("https://quotes.toscrape.com/")

first_quout = firefox.find_element(By.CLASS_NAME, "text").get_attribute(
    "innerHTML"
)

print(first_quout)

sleep(10)

firefox.quit()
