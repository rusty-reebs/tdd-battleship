import { Ship } from "../src/ship";

describe("Ship factory tests", () => {
  test("isSunk returns false when hits < length", () => {
    const battleship = Ship("battleship");
    battleship.hit();
    expect(battleship.isSunk()).toBe(false);
  });

  test("isSunk returns true when hits = length", () => {
    const battleship = Ship("battleship");
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.isSunk()).toBe(true);
  });
});
