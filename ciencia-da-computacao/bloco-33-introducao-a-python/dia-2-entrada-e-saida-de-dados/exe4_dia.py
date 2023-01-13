# Dado o seguinte arquivo no formato JSON, leia seu conteúdo
# e calcule a porcentagem de livros em cada categoria em relação
# ao número total de livros. O resultado
# deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import json
import csv

total = 0
all_categories = []
categories_clean = []
categories = []
unique_categories = []
data_qtd_category = []


with open("livros.json") as file:
    books = json.load(file)
    total = len(books)
    for book in books:
        all_categories.append(book["categories"])


for item in all_categories:
    if item:
        categories_clean.append(item)

for cat in categories_clean:
    categories.append(cat[0])
    if len(cat) > 1:
        categories.append(cat[1])
    unique_categories = list(set(categories))

# print(all_categories)
# print(categories_clean)

# print(categories)

# print(unique_categories)

# print(total)

for unique_category in unique_categories:
    qtd = categories.count(unique_category)
    # print(qtd)
    data_qtd_category.append((unique_category, ((qtd / total) * 100)))

print(data_qtd_category)


with open("categoris.csv", "w") as categoryFile:
    writer = csv.writer(categoryFile)

    headers = ["categoria", "porcentagem"]
    writer.writerow(headers)

    for category, percentage in data_qtd_category:
        row = [category, percentage]
        writer.writerow(row)
