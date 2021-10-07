//TODO write a test, then make it pass

const Ship = require("../src/ship");

describe("Ship factory tests", () => {
  test("marks position as hit", () => {
    const battleship = Ship(4);
    const output = ["-", "-", "-", "X"];
    expect(battleship.hit(3)).toEqual(output);
  });

  test("isSunk returns false when all indexes != X", () => {
    const battleship = Ship(4);
    battleship.hit(0);
    expect(battleship.isSunk()).toBe(false);
  });

  test("isSunk returns true when all indexes are X", () => {
    const battleship = Ship(4);
    battleship.hit(0);
    battleship.hit(1);
    battleship.hit(2);
    battleship.hit(3);
    battleship.hit(4);
    expect(battleship.isSunk()).toBe(true);
  });
});
