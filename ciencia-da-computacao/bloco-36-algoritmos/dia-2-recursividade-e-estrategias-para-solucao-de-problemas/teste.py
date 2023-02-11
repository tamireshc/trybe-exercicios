import requests
from parsel import Selector
from requests.exceptions import ConnectTimeout, HTTPError
import time


def fetch_html(base_url: str):
    time.sleep(0.5)
    try:
        res = requests.get(base_url)
        res.raise_for_status()
    except (ConnectTimeout, HTTPError):
        return ""

    return res.text


def scrape_quotes_data(html_content: str) -> list[dict]:
    selec = Selector(html_content)
    result = []
    for quote in selec.css("div.col-md-8 > div.quote"):
        author = quote.css("small.author ::text").get()
        content = quote.css("span.text ::text").get()
        tags = quote.css("div.tags > a.tag ::text").getall()

        quote_data = {
            "author": author,
            "content": content,
            "tags": tags,
        }
        result.append(quote_data)
    return result


def scrape_next_page_path(html_content):
    selec = Selector(html_content)
    return selec.css("li.next > a ::attr(href)").get()


def scrape_all_quotes():
    base_url = "http://quotes.toscrape.com"
    next_page_path = "/"
    result = []
    while next_page_path:
        quotes_html = fetch_html(base_url + next_page_path)
        quotes_data = scrape_quotes_data(quotes_html)
        next_page_path = scrape_next_page_path(quotes_html)
        result += quotes_data
    print(result)
    return result

# scrape_all_quotes()

arr1 = [1,2,3,4]
arr2 = [5, 6, 7]

print(arr1+arr2)