import { Ship } from "../src/ship";
import { Gameboard } from "../src/gameboard";

describe("Gameboard tests", () => {
  test("gameboard array starts with A1 and ends with J10", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    const arrayLength = playerOneGameboard.array.length;
    expect(playerOneGameboard.array[0]).toEqual("A1");
    expect(playerOneGameboard.array[arrayLength - 1]).toEqual("J10");
  });

  test("carrier placed horizontally at A2", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    const carrier = Ship(5, "C");
    playerOneGameboard.placeShip(carrier, "A2");
    expect(carrier.symbol).toEqual("C");
    expect(playerOneGameboard.array[10]).toEqual("C");
  });

  test.skip("battleship placed horizontally at A1", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    const battleship = Ship(5, "B");
    playerOneGameboard.placeShip("battleship", "A1");
    expect(playerOneGameboard.array[0]).toEqual("B");
    expect(playerOneGameboard.array[1]).toEqual("B");
    expect(playerOneGameboard.array[2]).toEqual("B");
    expect(playerOneGameboard.array[3]).toEqual("B");
  });

  test.skip("destroyer not on H3", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("destroyer", "E3");
    expect(playerOneGameboard.array[27]).toEqual("H3");
  });

  test.skip("destroyer on F3", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("destroyer", "E3");
    expect(playerOneGameboard.array[25]).toEqual("D");
  });

  test.skip("patrol boat is !sunk on one hit", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("patrolboat", "A1");
    playerOneGameboard.receiveAttack("A1");
    expect(patrolboat.isSunk()).toBe(undefined);
  });

  test.skip("patrol boat is sunk on two hits", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("patrolboat", "A1");
    playerOneGameboard.receiveAttack("A1");
    playerOneGameboard.receiveAttack("A2");
    expect(patrolboat.isSunk()).toBe(true);
  });
});
