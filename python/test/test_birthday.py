import datetime
from src.birthday import BirthdayNotebook

def test_birthday_notebook():
    notebook = BirthdayNotebook()
    today = datetime.date.today()
    assert len(notebook.get_birthdays(today)) == 1
