from pymongo import MongoClient

categories = []
list_qtd_categories = {}

with MongoClient() as client:
    db = client.library
    books = db.books.find()
    for book in books:
        for category in book["categories"]:
            if category not in categories and category != "":
                categories.append(category)

with MongoClient() as client:
    db = client.library
    books = db.books.find()
    for book in books:
        for category in categories:
            if category in book["categories"]:
                if category not in list_qtd_categories:
                    list_qtd_categories[category] = 1
                else:
                    list_qtd_categories[category] += 1
            else:
                pass
        else:
            pass


# print(categories)
order = sorted(list_qtd_categories.items(), key=lambda x: x[1], reverse=True)
print(list_qtd_categories.items())
