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

  // display both boards and render with info from Gameboard
  // call DOM methods from gameloop
  // example if (gameOver) { DOMStuff.gameOver() }

  //   DOM();
  DOM.renderMain();
  DOM.renderYourDisplay();
  DOM.renderOpponentDisplay();
  // DOM.renderMessage("The computer sank your battleship!");

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
  // DOM.opponentGridSquares.forEach((square, index) => {
  //   if (playerTwoGameboard.array[index].occupiedBy) {
  //     square.classList.add("occupied");
  //   }
  // });

  DOM.opponentGridSquares.forEach((square) => {
    //! if I click an occupied square, the computer still goes
    square.addEventListener("click", () => {
      playerOne.attack(playerTwoGameboard, square.dataset.coord),
        console.log("you clicked a coord!");
      DOM.renderMisses(playerTwoGameboard, DOM.opponentGridSquares);
      DOM.renderHits(playerTwoGameboard, DOM.opponentGridSquares);
      if (checkGameOver(playerTwoGameboard)) {
        // the if also calls the function
        console.log("game over!");
        // remove event listener here
      }
      //! computer should just go after a short delay
      setTimeout(() => {
        console.log("computer turn!");
        playerTwo.attack(playerOneGameboard);
        DOM.renderMisses(playerOneGameboard, DOM.yourGridSquares);
        DOM.renderHits(playerOneGameboard, DOM.yourGridSquares);
      }, 400);
      checkGameOver(playerOneGameboard);
    });
  });
  //! The computer sank your battleship!
  //! You sank the computer's battleship!

  const checkGameOver = (gameboard) => {
    if (gameboard.sunkShips.length == 5) {
      DOM.renderGameOver(gameboard);
      return true;
    }
    // stop game, play again button?
    // turn off all event listeners?
  };
  // let turn = 1; //? maybe not necessary
  // // user turn
  // // take user input with click event listener
  // DOM.opponentGridSquares.forEach((square) => {
  //   square.addEventListener("click", () => {
  //     if (turn % 2 == 1) {
  //       playerOne.attack(playerTwoGameboard, square.dataset.coord),
  //         console.log("you clicked a coord!");
  //       DOM.renderMisses(playerTwoGameboard, DOM.opponentGridSquares);
  //       DOM.renderHits(playerTwoGameboard, DOM.opponentGridSquares);
  //       //! computer should just go after a short delay
  //     } else {
  //       console.log("computer turn!");
  //       playerTwo.attack(playerOneGameboard);
  //       DOM.renderMisses(playerOneGameboard, DOM.yourGridSquares);
  //       DOM.renderHits(playerOneGameboard, DOM.yourGridSquares);
  //     }
  //     turn++;
  //     console.log(turn);
  //   });
  // });
};

export { gameLoop };
