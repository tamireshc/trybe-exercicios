import json
import random

with open("pokemon.json") as file:
    pokemons = json.load(file)["results"]

pokemon_sort = random.choice(pokemons)
# print(pokemon_sort["name"])


def how_is_pokemon():
    answer1 = input("Quem é esse pokemom?")
    if pokemon_sort["name"] == answer1:
        print("Vc acertou o pokemom")
    else:
        # print(pokemon_sort["name"][0:1])
        for letter in range(len(pokemon_sort["name"])):
            print(pokemon_sort["name"][0 : (letter + 1)])
            answers = input("Quem é esse pokemom?")
            if answers == pokemon_sort["name"]:
                print("Vc acertou o pokemom")
                break


how_is_pokemon()
