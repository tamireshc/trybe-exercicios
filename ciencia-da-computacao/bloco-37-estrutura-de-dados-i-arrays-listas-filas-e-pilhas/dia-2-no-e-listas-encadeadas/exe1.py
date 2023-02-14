def clear(self):
    value_to_be_removed = self.head_value
    while self.head_value:
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
