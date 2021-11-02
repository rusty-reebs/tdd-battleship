import { Gameboard } from "../src/gameboard";

let userGameboard;

beforeEach(() => {
  userGameboard = Gameboard();
  userGameboard.buildArray();
});

describe("Gameboard factory tests", () => {
  describe("buildArray method", () => {
    test("gameboard array starts with A1 and ends with J10", () => {
      const arrayLength = userGameboard.array.length;
      expect(userGameboard.array[0].name).toEqual("A1");
      expect(userGameboard.array[arrayLength - 1].name).toEqual("J10");
    });
  });

  describe("placeShip method", () => {
    test("patrolboat placed horizontally at B1", () => {
      userGameboard.placeShip("patrolboat", "B1", "horizontal");
      expect(userGameboard.array[10].occupiedBy.name).toEqual("patrolboat");
      expect(userGameboard.array[11].occupiedBy.name).toEqual("patrolboat");
    });

    test("battleship placed vertically at A1", () => {
      userGameboard.placeShip("battleship", "A1", "vertical");
      expect(userGameboard.array[0].occupiedBy.name).toEqual("battleship");
      expect(userGameboard.array[10].occupiedBy.name).toEqual("battleship");
      expect(userGameboard.array[20].occupiedBy.name).toEqual("battleship");
      expect(userGameboard.array[30].occupiedBy.name).toEqual("battleship");
    });

    test("two ships cannot occupy same coordinates", () => {
      userGameboard.placeShip("battleship", "A1", "horizontal");
      userGameboard.placeShip("submarine", "A1", "vertical");
      expect(userGameboard.array[0].occupiedBy.name).toEqual("battleship");
      expect(userGameboard.array[1].occupiedBy.name).toEqual("battleship");
      expect(userGameboard.array[10].occupiedBy).toEqual(undefined);
    });

    test("horizontal ship cannot exceed x=10", () => {
      userGameboard.placeShip("battleship", "A8", "horizontal");
      expect(userGameboard.array[7].occupiedBy).toEqual(undefined);
    });

    test("vertical ship cannot exceed y=10", () => {
      userGameboard.placeShip("submarine", "I1", "vertical");
      expect(userGameboard.array[80].occupiedBy).toEqual(undefined);
    });
  });

  describe("receiveAttack method", () => {
    beforeEach(() => {
      userGameboard.placeShip("patrolboat", "A1", "horizontal");
    });

    test("attack is a miss", () => {
      userGameboard.receiveAttack("B1");
      expect(userGameboard.array[10].missedShot).toBe(true);
    });

    test("patrol boat is !sunk on one hit", () => {
      userGameboard.receiveAttack("A1");
      let patrolboat = userGameboard.placedShips.find(
        (ship) => ship.name == "patrolboat"
      );
      expect(patrolboat.isSunk()).toBe(false);
    });

    test("patrol boat is sunk on two hits", () => {
      userGameboard.receiveAttack("A1");
      userGameboard.receiveAttack("A2");
      let patrolboat = userGameboard.placedShips.find(
        (ship) => ship.name == "patrolboat"
      );
      expect(patrolboat.isSunk()).toBe(true);
    });
  });
});
