//TODO write a test, then make it pass

const battleship = require("../src/index");

test.todo("under construction");

test("marks position as hit", () => {
  expect(battleship.hit(3)).toEqual(["-", "-", "-", "X", "-"]);
});

test("isSunk returns false when all indexes != X", () => {
  battleship.hit(0);
  expect(battleship.isSunk()).toBe(false);
});

test("isSunk returns true when all indexes are X", () => {
  battleship.hit(0);
  battleship.hit(1);
  battleship.hit(2);
  battleship.hit(3);
  battleship.hit(4);
  expect(battleship.isSunk()).toBe(true);
});
