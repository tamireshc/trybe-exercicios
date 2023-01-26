# Escreva um programa que se conecte ao banco de dados library e liste os
# livros da coleção books para uma determinada categoria recebida por uma
# pessoa usuária. Somente o título dos livros deve ser exibido.


from pymongo import MongoClient


def seach_books_for_category(category):
    with MongoClient() as client:
        db = client.library
        for book in db.books.find({"categories": {"$in": [category]}}):
            print(book["title"])


seach_books_for_category("Internet")
