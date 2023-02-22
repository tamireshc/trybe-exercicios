from employee import Employee
from hashMap import HashMap

# Exercício 1: b) Use a entrada abaixo para criar objetos Employee:

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

employeeClass = {}


for index, employee in enumerate(employees):
    employeeClass[f"employee{index}"] = Employee(employee[0], employee[1])


print(employeeClass)

print(employeeClass["employee0"])

# Exercício 1: c) Instancie a sua classe HashMap e use os objetos Employee
#  para povoá-la. Imprima na tela o nome da pessoa de id_num = 23, acessando
#  a informação a partir da HashMap.

hasmap = HashMap()
hasmap.insert(employeeClass["employee0"])
hasmap.insert(employeeClass["employee1"])
hasmap.insert(employeeClass["employee2"])

print(hasmap.get_value(23))


# Exercício 2: A pessoa de id_num = 10 está com o nome errado, deveria ser
#  name30. Implemente um método com a assinatura abaixo, onde id_num é a
#  chave para localizar o registro que queremos alterar e new_name é o nome
#  a ser colocado. Verifique se o seu código está realmente alterando o nome,
#  imprimindo o nome antes e depois da alteração

print(hasmap.update_value(10, "name30"))
print(hasmap.get_value(10))
