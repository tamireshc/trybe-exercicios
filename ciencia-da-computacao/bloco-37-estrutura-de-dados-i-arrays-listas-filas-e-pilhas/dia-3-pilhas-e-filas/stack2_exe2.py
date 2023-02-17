import linkedList


class Stack:
    def __init__(self):
        self.linkedList = linkedList.LinkedList()

    def push(self, value):
        self.linkedList.insert_last(value)
        print(self.linkedList)

    def pop(self):
        self.linkedList.remove_last()
        print(self.linkedList)

    def peek(self):
        print(self.linkedList.get_element_at(len(self.linkedList) - 1))

    def is_empty(self):
        print(self.linkedList.is_empty())


stack = Stack()
stack.push("item1")
stack.push("item2")
stack.push("item3")
stack.pop()
stack.peek()
