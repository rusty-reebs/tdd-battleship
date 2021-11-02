import { Gameboard } from "../src/gameboard";
import { Player } from "../src/player";

describe("Player factory tests", () => {
  test("player attacks and logs a hit on opponent ship", () => {
    const computerGameBoard = Gameboard();
    computerGameBoard.buildArray();
    computerGameBoard.placeShip("patrolboat", "A1", "horizontal");
    const user = Player("user");
    user.attack(computerGameBoard, "A1");
    let patrolboat = computerGameBoard.placedShips.find(
      (ship) => ship.name == "patrolboat"
    );
    expect(patrolboat.hits).toEqual(1);
  });

  test("computer player attacks random coordinates", () => {
    const userGameboard = Gameboard();
    userGameboard.buildArray();
    const computer = Player("computer");
    computer.attack(userGameboard);
    let missedArray = userGameboard.array.map((coord) => coord.missedShot);
    expect(missedArray).toContain(true);
  });
});
