from collections import ChainMap, defaultdict


d1 = {"a": 1, "b": 2}
d2 = {"c": 3, "d": 4}
d3 = {"e": 5, "f": 6}

# Defining the chainmap
c = ChainMap(d1, d2, d3)

print(c)

print(c["a"])


default = defaultdict(list)
default["time"].append("Flávio")
default["time"].append("Felps")
default["time"].append("Carlos")
default["time"].append("Roni")
print(default["time"], default["Instrutor"])
print(default)
