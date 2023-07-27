namespace Kata;

public class Birthday
{
    public Birthday(DateTime date, string name)
    {
        Date = date;
        Name = name;
    }

    public DateTime Date { get; }
    public string Name { get; }
}

public class BirthdayNotebook
{
    private readonly Dictionary<string, List<Birthday>> _birthdays = new Dictionary<string, List<Birthday>>();

    public BirthdayNotebook AddBirthday(string name, DateTime date)
    {
        var dateAsStr = $"{date.Month}/{date.Day}";
        var birthdays = _birthdays.GetValueOrDefault(dateAsStr) ?? new List<Birthday>();

        _birthdays[dateAsStr] = birthdays;
        birthdays.Add(new Birthday(date, name));

        return this;
    }

    public IEnumerable<string> GetBirthdays(DateTime date)
    {
        var dateAsStr = $"{date.Month}/{date.Day}";
        return _birthdays.GetValueOrDefault(dateAsStr)?.Select(b => b.Name) ?? Enumerable.Empty<string>();
    }
}