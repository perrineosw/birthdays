import { BirthdayNotebook } from "./birthdays";

describe("birthdays", function () {
  it("should return empty array when no birthday is set", () => {
    const notebook = new BirthdayNotebook();
    expect(notebook.getBirthdays(new Date())).toHaveLength(1);
  });
});
