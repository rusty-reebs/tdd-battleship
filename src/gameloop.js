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

  let ships = ["carrier", "battleship", "destroyer", "submarine", "patrolboat"];
  let shipObject;

  playerOneGameboard.buildArray();

  ships.forEach((ship) => {
    do {
      playerOneGameboard.placeShip(
        ship,
        playerOne.generateCoords(),
        playerOne.randomOrientation()
      );
      shipObject = playerOneGameboard.placedShips.find(
        (obj) => obj.name === ship
      );
    } while (!shipObject);
  });

  DOM.yourGridSquares.forEach((square, index) => {
    if (playerOneGameboard.array[index].occupiedBy) {
      square.classList.add("occupied");
    }
  });

  DOM.shuffle.addEventListener("click", () => {
    location.reload();
  });

  //! function beginGame?

  playerTwoGameboard.buildArray();
  // let shipObject;
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

  //! uncomment to show computer ships
  DOM.opponentGridSquares.forEach((square, index) => {
    if (playerTwoGameboard.array[index].occupiedBy) {
      square.classList.add("occupied");
    }
  });

  //! end function beginGame?

  let gameOver = false;
  const checkGameOver = (gameboard) => {
    if (gameboard.sunkShips.length == 5 && !gameOver) {
      DOM.renderGameOver(gameboard);
      gameOver = true;
      return true;
    }
    // stop game, play again button?
    // turn off all event listeners?
  };

  DOM.opponentGridSquares.forEach((square) => {
    square.addEventListener("click", function listener() {
      if ((DOM.shuffle.style.display = "block")) {
        DOM.shuffle.style.display = "none";
        DOM.clearMessage();
      }
      playerOne.attack(playerTwoGameboard, square.dataset.coord),
        DOM.renderMisses(playerTwoGameboard, DOM.opponentGridSquares);
      DOM.renderHits(playerTwoGameboard, DOM.opponentGridSquares);
      if (checkGameOver(playerTwoGameboard)) {
        DOM.opponentGridSquares.forEach((square) => {
          square.removeEventListener("click", listener);
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
};

export { gameLoop };
