using Xunit;
using System;
using System.Linq;

namespace Kata.Tests;


public class BirthdayNotebookTest
{
    [Fact]
    public void ShouldReturnEmptyListWhenNoBirthdayIsSet()
    {
        var notebook = new BirthdayNotebook();
        var today = DateTime.Today;
        var birthdays = notebook.GetBirthdays(today);
        Assert.Equal(1, birthdays.Count());
    }
}