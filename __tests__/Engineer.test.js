const Engineer = require("../lib/Engineer");

test("creates Engineer object", () => {
  const engineer = new Engineer("Elon", "tesla1@email.com", 1, "Elon1122");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
  const engineer = new Engineer("Elon", "tesla1@email.com", 1, "Elon1122");

  expect(engineer.getName()).toEqual(expect.any(String));
});

test("gets engineer's email", () => {
  const engineer = new Engineer("Elon", "tesla1@email.com", 1, "Elon1122");

  expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("gets engineer's id", () => {
  const engineer = new Engineer("Elon", "tesla1@email.com", 1, "Elon1122");

  expect(engineer.getId()).toEqual(expect.any(Number));
});

test("gets engineer's github username", () => {
  const engineer = new Engineer("Elon", "tesla1@email.com", 1, "Elon1122");

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
  const engineer = new Engineer("Elon", "tesla1@email.com", 1, "Elon1122");

  expect(engineer.getRole()).toEqual(expect.any(String));
});