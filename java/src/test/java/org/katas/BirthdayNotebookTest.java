package org.katas;
import org.junit.jupiter.api.Test;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BirthdayNotebookTest {

    @Test
    void shouldReturnEmptyListWhenNoBirthdayIsSet() {
        BirthdayNotebook notebook = new BirthdayNotebook();
        Date today = new Date();
        List<String> birthdays = notebook.getBirthdays(today);
        assertEquals(1, birthdays.size());
    }
}