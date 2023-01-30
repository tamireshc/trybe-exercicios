# Exercício 3 Utilizando a ferramenta Selenium, no site
# “https://diolinux.com.br/“, faça a extração dos campos título, link para o
#  post, trecho exibido de cada post da página inicial.
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

response = firefox.get("https://diolinux.com.br/")

posts = []

for post in firefox.find_elements(By.CLASS_NAME, "post-title"):
    new_item = {}
    new_item["title"] = post.find_element(By.TAG_NAME, "a").get_attribute(
        "innerHTML"
    )
    new_item["link"] = post.find_element(By.TAG_NAME, "a").get_attribute(
        "href"
    )
    posts.append(new_item)


print(posts)

sleep(5)

firefox.quit()
