import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { DOM } from "./dom-ui";

// set up new game
// create players and gameboards

const gameLoop = () => {
  const playerOne = Player("user");
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
      square.classList.toggle("occupied");
    }
  });

  playerTwoGameboard.buildArray();
  playerTwoGameboard.placeShip("carrier", "A4", "horizontal");
  playerTwoGameboard.placeShip("battleship", "B10", "vertical");
  playerTwoGameboard.placeShip("destroyer", "C4", "vertical");
  playerTwoGameboard.placeShip("submarine", "H6", "horizontal");
  playerTwoGameboard.placeShip("patrolboat", "J9", "horizontal");

  DOM.opponentGridSquares.forEach((square, index) => {
    if (playerTwoGameboard.array[index].occupiedBy) {
      square.classList.add("occupied");
    }
  });

  // let turn = 1;
  // if (turn % 2 == 1) {
  // user turn
  // take user input with click event listener
  DOM.opponentGridSquares.forEach((square) => {
    square.addEventListener("click", () => {
      playerOne.attack(playerTwoGameboard, square.dataset.coord),
        console.log("you clicked a coord!");
      DOM.renderMisses(playerTwoGameboard);
      DOM.renderHits(playerTwoGameboard);
    });
  });

  // else {
  // computer turn
  // console.log("computer turn!");
  // }
  // turn++;

  // player takes a turn
  // add event listener for attack
  // if array contains missedShot then call method to turn square red
};

export { gameLoop };
