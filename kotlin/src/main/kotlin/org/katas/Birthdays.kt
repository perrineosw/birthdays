package org.katas

import java.util.*
import java.util.stream.Collectors

class Birthday(val date: Date, val name: String)


class BirthdayNotebook {
    private val birthdays: MutableMap<String, MutableList<Birthday>> = HashMap()
    fun addBirthday(name: String?, date: Date): BirthdayNotebook {
        val dateAsStr = date.month.toString() + "/" + date.date
        var birthdaysOnDate = birthdays[dateAsStr]
        if (birthdaysOnDate == null) {
            birthdaysOnDate = ArrayList()
            birthdays[dateAsStr] = birthdaysOnDate
        }
        birthdaysOnDate.add(Birthday(date, name!!))
        return this
    }

    fun getBirthdays(date: Date): List<String> {
        val dateAsStr = date.month.toString() + "/" + date.date
        val birthdaysOnDate = birthdays[dateAsStr]
            ?: return emptyList()
        return birthdaysOnDate.stream().map { b: Birthday -> b.name }.collect(Collectors.toList())
    }
}