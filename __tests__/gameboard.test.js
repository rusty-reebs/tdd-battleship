import { Ship } from "../src/ship";
import { Gameboard } from "../src/gameboard";

let playerOneGameboard;

beforeEach(() => {
  playerOneGameboard = Gameboard();
  playerOneGameboard.buildArray();
});

test("gameboard array starts with A1 and ends with J10", () => {
  const arrayLength = playerOneGameboard.array.length;
  expect(playerOneGameboard.array[0].name).toEqual("A1");
  expect(playerOneGameboard.array[arrayLength - 1].name).toEqual("J10");
});

test("carrier placed horizontally at A2", () => {
  playerOneGameboard.placeShip("carrier", "A2");
  expect(playerOneGameboard.array[10].occupiedBy.name).toEqual("carrier");
});

test("battleship placed horizontally at A1", () => {
  playerOneGameboard.placeShip("battleship", "A1");
  expect(playerOneGameboard.array[0].occupiedBy.name).toEqual("battleship");
  expect(playerOneGameboard.array[1].occupiedBy.name).toEqual("battleship");
  expect(playerOneGameboard.array[2].occupiedBy.name).toEqual("battleship");
  expect(playerOneGameboard.array[3].occupiedBy.name).toEqual("battleship");
});

test("destroyer not on H3", () => {
  playerOneGameboard.placeShip("destroyer", "E3");
  expect(playerOneGameboard.array[27].occupiedBy).toEqual(undefined);
});

test("destroyer on F3", () => {
  playerOneGameboard.placeShip("destroyer", "E3");
  expect(playerOneGameboard.array[25].occupiedBy.name).toEqual("destroyer");
});

test("attack is a miss", () => {
  playerOneGameboard.receiveAttack("A1");
  // expect(playerOneGameboard.array[0].missedShot).toBe(true);
  expect(playerOneGameboard.missedShots).toContain("A1");
});

test("patrol boat is !sunk on one hit", () => {
  playerOneGameboard.placeShip("patrolboat", "A2");
  playerOneGameboard.receiveAttack("A2");
  let patrolboat = playerOneGameboard.placedShips.find(
    (ship) => ship.name == "patrolboat"
  );
  expect(patrolboat.isSunk()).toBe(false);
});

test("patrol boat is sunk on two hits", () => {
  playerOneGameboard.placeShip("patrolboat", "A1");
  playerOneGameboard.receiveAttack("A1");
  playerOneGameboard.receiveAttack("B1");
  let patrolboat = playerOneGameboard.placedShips.find(
    (ship) => ship.name == "patrolboat"
  );
  expect(patrolboat.isSunk()).toBe(true);
});
