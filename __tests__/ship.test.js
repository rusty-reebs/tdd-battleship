//TODO write a test, then make it pass

import { Ship } from "../src/ship";

test("isSunk returns undefined when hits < length", () => {
  const battleship = Ship("battleship");
  battleship.hit();
  expect(battleship.isSunk()).toBe(undefined);
});

test("isSunk returns true when hits = length", () => {
  const battleship = Ship("battleship");
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(true);
});
