const Manager = require("../lib/Manager");
// const userInput = require("../index");

test("creates Manager object", () => {
  const manager = new Manager("Kee", "viakee@email.com", 1, 22);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
  const manager = new Manager("Kee", "viakee@email.com", 1, 22);

  expect(manager.getName()).toEqual(expect.any(String));
});

test("gets manager's email", () => {
  const manager = new Manager("Kee", "viakee@email.com", 1, 22);

  expect(manager.getEmail()).toEqual(expect.any(String));
});

test("gets manager's id", () => {
  const manager = new Manager("Kee", "viakee@email.com", 1, 22);

  expect(manager.getId()).toEqual(expect.any(Number));
});

test("gets manager's office number", () => {
  const manager = new Manager("Kee", "viakee@email.com", 1, 22);

  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("gets manager's role", () => {
  const manager = new Manager("Kee", "viakee@email.com", 1, 22);

  expect(manager.getRole()).toEqual(expect.any(String));
});