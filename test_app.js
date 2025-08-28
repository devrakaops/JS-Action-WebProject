const { greet } = require("./app");

test("greet function exists", () => {
  expect(typeof greet).toBe("function");
});
