import { Gameboard } from "../src/gameboard";
import { Player } from "../src/player";

test("player attacks and logs a hit on opponent ship", () => {
  const playerTwoGameboard = Gameboard();
  playerTwoGameboard.buildArray();
  playerTwoGameboard.placeShip("patrolboat", "A1");

  const player1 = Player("Admiral");
  const player2 = Player("Seaman");
  player1.attack(playerTwoGameboard, "A1");
  let patrolboat = playerTwoGameboard.placedShips.find(
    (ship) => ship.name == "patrolboat"
  );
  expect(patrolboat.hits).toEqual(1);
});
