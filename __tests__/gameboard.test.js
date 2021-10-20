import { Ship } from "../src/ship";
import { Gameboard } from "../src/gameboard";

let playerOneGameboard;

beforeEach(() => {
  playerOneGameboard = Gameboard();
  playerOneGameboard.buildArray();
});

describe("Gameboard factory", () => {
  test("gameboard array starts with A1 and ends with J10", () => {
    const arrayLength = playerOneGameboard.array.length;
    expect(playerOneGameboard.array[0].name).toEqual("A1");
    expect(playerOneGameboard.array[arrayLength - 1].name).toEqual("J10");
  });

  describe("placeShip method tests", () => {
    test("patrolboat placed horizontally at B1", () => {
      playerOneGameboard.placeShip("patrolboat", "B1", "horizontal");
      expect(playerOneGameboard.array[10].occupiedBy.name).toEqual(
        "patrolboat"
      );
      expect(playerOneGameboard.array[11].occupiedBy.name).toEqual(
        "patrolboat"
      );
    });

    test("battleship placed vertically at A1", () => {
      playerOneGameboard.placeShip("battleship", "A1", "vertical");
      expect(playerOneGameboard.array[0].occupiedBy.name).toEqual("battleship");
      expect(playerOneGameboard.array[10].occupiedBy.name).toEqual(
        "battleship"
      );
      expect(playerOneGameboard.array[20].occupiedBy.name).toEqual(
        "battleship"
      );
      expect(playerOneGameboard.array[30].occupiedBy.name).toEqual(
        "battleship"
      );
    });

    test("destroyer not on C1", () => {
      playerOneGameboard.placeShip("destroyer", "C2", "horizontal");
      expect(playerOneGameboard.array[20].occupiedBy).toEqual(undefined);
    });

    test("destroyer on C3", () => {
      playerOneGameboard.placeShip("destroyer", "C2", "horizontal");
      expect(playerOneGameboard.array[22].occupiedBy.name).toEqual("destroyer");
    });

    test("two ships cannot occupy same coordinates", () => {
      playerOneGameboard.placeShip("battleship", "A1", "horizontal");
      playerOneGameboard.placeShip("submarine", "A1", "vertical");
      expect(playerOneGameboard.array[0].occupiedBy.name).toEqual("battleship");
      expect(playerOneGameboard.array[1].occupiedBy.name).toEqual("battleship");
      expect(playerOneGameboard.array[10].occupiedBy).toEqual(undefined);
    });

    test("horizontal ship cannot exceed x=10", () => {
      playerOneGameboard.placeShip("battleship", "A8", "horizontal");
      expect(playerOneGameboard.array[7].occupiedBy).toEqual(undefined);
    });

    test("vertical ship cannot exceed y=10", () => {
      playerOneGameboard.placeShip("submarine", "I1", "vertical");
      expect(playerOneGameboard.array[80].occupiedBy).toEqual(undefined);
    });
  });

  describe("receiveAttack method tests", () => {
    test("attack is a miss", () => {
      playerOneGameboard.receiveAttack("A1");
      expect(playerOneGameboard.array[0].missedShot).toBe(true);
      // expect(playerOneGameboard.missedShots).toContain("A1");
    });

    test("patrol boat is !sunk on one hit", () => {
      playerOneGameboard.placeShip("patrolboat", "A1", "horizontal"); //! test only one function. This should be a mock?
      playerOneGameboard.receiveAttack("A1");
      let patrolboat = playerOneGameboard.placedShips.find(
        (ship) => ship.name == "patrolboat"
      );
      expect(patrolboat.isSunk()).toBe(false);
    });

    test("patrol boat is sunk on two hits", () => {
      playerOneGameboard.placeShip("patrolboat", "A1", "horizontal");
      playerOneGameboard.receiveAttack("A1");
      playerOneGameboard.receiveAttack("A2");
      let patrolboat = playerOneGameboard.placedShips.find(
        (ship) => ship.name == "patrolboat"
      );
      expect(patrolboat.isSunk()).toBe(true);
    });
  });
});
