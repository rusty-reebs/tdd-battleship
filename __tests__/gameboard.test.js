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

  test.skip("carrier placed horizontally at A2", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("carrier", "A2");
    expect(playerOneGameboard.array[10]).toEqual("carrier");
  });

  test.skip("battleship placed horizontally at A1", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("battleship", "A1");
    expect(playerOneGameboard.array[0]).toEqual("battleship");
    expect(playerOneGameboard.array[1]).toEqual("battleship");
    expect(playerOneGameboard.array[2]).toEqual("battleship");
    expect(playerOneGameboard.array[3]).toEqual("battleship");
  });

  test("destroyer not on H3", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("destroyer", "E3");
    expect(playerOneGameboard.array[27]).toEqual("H3");
  });

  test("destroyer on F3", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("destroyer", "E3");
    expect(playerOneGameboard.array[25]).toEqual("destroyer");
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
    const patrolboat = Ship(2, "P");
    playerOneGameboard.placeShip(patrolboat, "A1");
    playerOneGameboard.receiveAttack("A1");
    playerOneGameboard.receiveAttack("A2");
    expect(patrolboat.isSunk()).toBe(true);
  });
});
