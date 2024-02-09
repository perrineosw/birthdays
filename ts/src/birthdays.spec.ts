import { BirthdayNotebook } from "./birthdays";

describe("BirthdayNotebook", () => {
  let notebook: BirthdayNotebook;

  beforeEach(() => {
    notebook = new BirthdayNotebook();
  });

  it("should return empty array when no birthday is set for a date", () => {
    const randomDate = new Date("2024-01-01");
    expect(notebook.getBirthdays(randomDate)).toHaveLength(0);
  });

  it("should add a birthday and retrieve it correctly", () => {
    const name = "John Doe";
    const birthdayDate = new Date("2024-06-15");
    notebook.addBirthday(name, birthdayDate);
    expect(notebook.getBirthdays(birthdayDate)).toContain(name);
  });

  it("should handle multiple birthdays on the same date", () => {
    const names = ["Alice", "Bob"];
    const birthdayDate = new Date("2024-06-15");
    names.forEach(name => notebook.addBirthday(name, birthdayDate));
    expect(notebook.getBirthdays(birthdayDate)).toHaveLength(names.length);
    expect(notebook.getBirthdays(birthdayDate)).toEqual(expect.arrayContaining(names));
  });

  it("should not find birthdays on a different date", () => {
    notebook.addBirthday("Charlie", new Date("2024-06-15"));
    expect(notebook.getBirthdays(new Date("2024-06-16"))).toHaveLength(0);
  });

  it("returns instance of BirthdayNotebook when adding a birthday", () => {
    const result = notebook.addBirthday("Daisy", new Date("2024-06-15"));
    expect(result).toBeInstanceOf(BirthdayNotebook);
  });

  it("tracks birthdays across different months and days correctly", () => {
    notebook.addBirthday("Eve", new Date("2024-02-28"));
    notebook.addBirthday("Frank", new Date("2024-03-01"));
    expect(notebook.getBirthdays(new Date("2024-02-28"))).toContain("Eve");
    expect(notebook.getBirthdays(new Date("2024-03-01"))).toContain("Frank");
  });

  // Ajoutez d'autres tests selon les besoins...
});
