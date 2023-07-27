class Birthday:
    def __init__(self, date, name):
        self.date = date
        self.name = name

class BirthdayNotebook:
    def __init__(self):
        self.birthdays = dict()

    def add_birthday(self, name, date):
        dateAsStr = str(date.month) + "/" + str(date.day)
        if dateAsStr not in self.birthdays:
            self.birthdays[dateAsStr] = []
        self.birthdays[dateAsStr].append(Birthday(date, name))
        return self

    def get_birthdays(self, date):
        dateAsStr = str(date.month) + "/" + str(date.day)
        if dateAsStr not in self.birthdays:
            return []
        return [b.name for b in self.birthdays[dateAsStr]]