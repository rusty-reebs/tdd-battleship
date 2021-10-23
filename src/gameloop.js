import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { DOM } from "./dom-ui";

// set up new game
// create players and gameboards

const gameLoop = () => {
  const playerOne = Player("Rusty");
  const playerTwo = Player("computer");
  const playerOneGameboard = Gameboard();
  const playerTwoGameboard = Gameboard();

  // display both boards and render with info from Gameboard
  // call DOM methods from gameloop
  // example if (gameOver) { DOMStuff.gameOver() }

  //   DOM();
  DOM.renderMain();
  DOM.renderYourDisplay();
  DOM.renderOpponentDisplay();

  playerOneGameboard.buildArray();
  playerOneGameboard.placeShip("carrier", "A4", "horizontal");
  playerOneGameboard.placeShip("battleship", "B10", "vertical");
  playerOneGameboard.placeShip("destroyer", "C4", "vertical");
  playerOneGameboard.placeShip("submarine", "H6", "horizontal");
  playerOneGameboard.placeShip("patrolboat", "J9", "horizontal");

  DOM.yourGridSquares.forEach((square, index) => {
    if (playerOneGameboard.array[index].occupiedBy) {
      square.classList.add("occupied");
    }
  });

  DOM.opponentGridSquares.forEach((square, index) => {
    if (playerTwoGameboard.array[index].occupiedBy) {
      square.classList.add("occupied");
    }
  });
};

export { gameLoop };
