import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { DOM } from "./dom-ui";

// set up new game
// create players and gameboards
//! rename variables user, computer, userGameboard, computerGameboard, userGridSquares, computerGridSquares
const gameLoop = () => {
  const playerOne = Player("user");
  const playerTwo = Player("computer");
  const playerOneGameboard = Gameboard();
  const playerTwoGameboard = Gameboard();

  //   DOM();
  DOM.renderMain();
  DOM.renderYourDisplay();
  DOM.renderOpponentDisplay();
  // DOM.renderMessage("The computer sank your battleship!");

  // TODO place ship logic
  // place your carrier pop-up
  // rotate 90 degrees button
  // on hover, add change class of next indices to show ship

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

  playerTwoGameboard.buildArray();
  let shipObject;
  let ships = ["carrier", "battleship", "destroyer", "submarine", "patrolboat"];
  ships.forEach((ship) => {
    do {
      playerTwoGameboard.placeShip(
        ship,
        playerTwo.generateCoords(),
        playerTwo.randomOrientation()
      );
      shipObject = playerTwoGameboard.placedShips.find(
        (obj) => obj.name === ship
      );
    } while (!shipObject);
  });
  console.log(playerTwoGameboard.placedShips);

  //! uncomment to show computer ships
  DOM.opponentGridSquares.forEach((square, index) => {
    if (playerTwoGameboard.array[index].occupiedBy) {
      square.classList.add("occupied");
    }
  });

  let gameOver = false;
  const checkGameOver = (gameboard) => {
    if (gameboard.sunkShips.length == 5 && !gameOver) {
      //adding this gameOver stops the message popup
      DOM.renderGameOver(gameboard);
      gameOver = true;
      return true;
    }
    // stop game, play again button?
    // turn off all event listeners?
  };

  DOM.opponentGridSquares.forEach((square) => {
    square.addEventListener("click", function listener() {
      playerOne.attack(playerTwoGameboard, square.dataset.coord),
        DOM.renderMisses(playerTwoGameboard, DOM.opponentGridSquares);
      DOM.renderHits(playerTwoGameboard, DOM.opponentGridSquares);
      if (checkGameOver(playerTwoGameboard)) {
        DOM.opponentGridSquares.forEach((square) => {
          square.removeEventListener("click", listener); //! removes listeners only on clicked squares after gameover
        });
        return;
      }
      setTimeout(() => {
        playerTwo.attack(playerOneGameboard);
        DOM.renderMisses(playerOneGameboard, DOM.yourGridSquares);
        DOM.renderHits(playerOneGameboard, DOM.yourGridSquares);
        if (checkGameOver(playerOneGameboard)) {
          square.removeEventListener("click", listener);
          return;
        }
      }, 400);
    });
  });

  //! The computer sank your battleship!
  //! You sank the computer's battleship!
  //? can check for a new sunk ship added to array?
  // check length of array, if it is longer (a ship added), then get that ship?

  // const checkSunkShip = () => {}
};

export { gameLoop };
