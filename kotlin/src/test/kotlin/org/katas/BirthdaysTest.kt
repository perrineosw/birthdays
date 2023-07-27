package org.katas

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import java.util.*

class BirthdaysTest {
    @Test
    fun shouldReturnEmptyListWhenNoBirthdayIsSet() {
        val notebook = BirthdayNotebook()
        val today = Date()
        val birthdays = notebook.getBirthdays(today)
        assertEquals(1, birthdays.size)
    }
}