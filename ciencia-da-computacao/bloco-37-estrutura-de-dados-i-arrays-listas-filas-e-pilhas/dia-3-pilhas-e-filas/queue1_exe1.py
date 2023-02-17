import linkedList


class Queue:
    def __init__(self):
        self.linkedList = linkedList.LinkedList()

    def enqueue(self, value):
        self.linkedList.insert_last(value)
        print(self.linkedList)

    def dequeue(self):
        self.linkedList.remove_first()
        print(self.linkedList)

    def peek(self):
        return self.linkedList.get_element_at(0)
        # print(len(self.linkedList))


queue2 = Queue()
queue2.enqueue("item1")
queue2.enqueue("item2")
queue2.enqueue("item3")
queue2.dequeue()
print(queue2.peek())
