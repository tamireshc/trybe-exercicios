    def index_of(self, target):
        position = 0
        while position <= self.__length - 1:
            if self.get_element_at(position).value == target:
                return position
            else:
                position += 1

        return -1

    def index_of2(self, target):
        position = 0
        current = self.head_value
        while position <= self.__length - 1:
            if current.value == target:
                return position
            else:
                position += 1
                current = current.next

        return -1