import { Gameboard } from "../src/gameboard";
import { Player } from "../src/player";

test("player attacks and logs a hit on opponent ship", () => {
  const playerTwoGameboard = Gameboard();
  playerTwoGameboard.buildArray();
  playerTwoGameboard.placeShip("patrolboat", "A1");
  const player1 = Player("Admiral");
  player1.attack(playerTwoGameboard, "A1");
  let patrolboat = playerTwoGameboard.placedShips.find(
    (ship) => ship.name == "patrolboat"
  );
  expect(patrolboat.hits).toEqual(1);
});

test("computer player attacks random coordinates", () => {
  const playerOneGameboard = Gameboard();
  playerOneGameboard.buildArray();
  const player2 = Player("computer");
  player2.attack(playerOneGameboard);
  let missedArray = playerOneGameboard.array.map((coord) => coord.missedShot);
  expect(missedArray).toContain(true);
  // expect(playerOneGameboard.missedShots).toBeTruthy;
});

test.skip("computer player cannot attack same coordinates twice", () => {
  const playerOneGameboard = Gameboard();
  playerOneGameboard.buildArray();
  const player2 = Player("computer");
  // maybe a mock function to simulate 99 shots?
});
