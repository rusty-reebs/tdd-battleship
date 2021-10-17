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

test("carrier placed horizontally at B1", () => {
  playerOneGameboard.placeShip("carrier", "B1", "horizontal");
  expect(playerOneGameboard.array[10].occupiedBy.name).toEqual("carrier");
});

test("battleship placed vertically at A1", () => {
  playerOneGameboard.placeShip("battleship", "A1", "vertical");
  expect(playerOneGameboard.array[0].occupiedBy.name).toEqual("battleship");
  expect(playerOneGameboard.array[10].occupiedBy.name).toEqual("battleship");
  expect(playerOneGameboard.array[20].occupiedBy.name).toEqual("battleship");
  expect(playerOneGameboard.array[30].occupiedBy.name).toEqual("battleship");
});

test("destroyer not on C1", () => {
  playerOneGameboard.placeShip("destroyer", "C2", "horizontal");
  expect(playerOneGameboard.array[20].occupiedBy).toEqual(undefined);
});

test("destroyer on C3", () => {
  playerOneGameboard.placeShip("destroyer", "C2", "horizontal");
  expect(playerOneGameboard.array[22].occupiedBy.name).toEqual("destroyer");
});

test("attack is a miss", () => {
  playerOneGameboard.receiveAttack("A1");
  expect(playerOneGameboard.array[0].missedShot).toBe(true);
  // expect(playerOneGameboard.missedShots).toContain("A1");
});

test("patrol boat is !sunk on one hit", () => {
  playerOneGameboard.placeShip("patrolboat", "A1", "horizontal");
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

test("two ships cannot occupy same coordinates", () => {
  playerOneGameboard.placeShip("battleship", "A1", "horizontal");
  playerOneGameboard.placeShip("submarine", "A1", "vertical");
  expect(playerOneGameboard.array[0].occupiedBy.name).toEqual("battleship");
  expect(playerOneGameboard.array[1].occupiedBy.name).toEqual("battleship");
  expect(playerOneGameboard.array[10].occupiedBy).toEqual(undefined);
});
