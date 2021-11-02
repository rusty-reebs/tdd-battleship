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

  // has to be a loop, clearing events listeners each time
  // ships.forEach((ship) => {
  // nothing is clicked so it just renders all the messages
  //! need to stop and wait for a click ... await
  //! this code works to place the carrier
  //? maybe DOM.renderYourDisplay with removeChilds to clear all event listeners then rebuild
  // DOM.renderMessage("Place your carrier!");
  // DOM.yourGridSquares.forEach((square, index) => {
  //   square.addEventListener("mouseover", () => {
  //     square.classList.toggle("select");
  //     for (let i = 1; i < 5; i++) {
  //       if (shipOrientation == "horizontal") {
  //         if (5 <= 10 - playerOneGameboard.array[index].x + 1) {
  //           DOM.yourGridSquares[index + i].classList.toggle("select");
  //         }
  //       } else {
  //         if (5 <= 10 - playerOneGameboard.array[index].yNum + 1) {
  //           DOM.yourGridSquares[index + i * 10].classList.toggle("select");
  //         }
  //       }
  //     }
  //   });

  //   square.addEventListener("mouseout", () => {
  //     square.classList.toggle("select");
  //     for (let i = 1; i < 5; i++) {
  //       if (shipOrientation == "horizontal") {
  //         if (5 <= 10 - playerOneGameboard.array[index].x + 1) {
  //           DOM.yourGridSquares[index + i].classList.toggle("select");
  //         }
  //       } else {
  //         if (5 <= 10 - playerOneGameboard.array[index].yNum + 1) {
  //           DOM.yourGridSquares[index + i * 10].classList.toggle("select");
  //         }
  //       }
  //     }
  //   });

  //   square.addEventListener("click", () => {
  //     playerOneGameboard.placeShip(
  //       "carrier",
  //       square.dataset.coord,
  //       shipOrientation
  //     );
  //     console.log(playerOneGameboard.placedShips);
  //     DOM.clearMessage();
  //     DOM.yourGridSquares.forEach((square, index) => {
  //       if (playerOneGameboard.array[index].occupiedBy) {
  //         square.classList.add("occupied");
  //       }
  //     });
  //   });
  // });
  // });

  // playerOneGameboard.placeShip("carrier", "A4", "horizontal");
  // playerOneGameboard.placeShip("battleship", "B10", "vertical");
  // playerOneGameboard.placeShip("destroyer", "C4", "vertical");
  // playerOneGameboard.placeShip("submarine", "H6", "horizontal");
  // playerOneGameboard.placeShip("patrolboat", "J9", "horizontal");

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
  // console.log(playerTwoGameboard.placedShips);

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
      //adding this gameOver stops the message popup, but if removeEventListener worked, then wouldn't need?
      DOM.renderGameOver(gameboard);
      gameOver = true;
      return true;
    }
    // stop game, play again button?
    // turn off all event listeners?
  };

  DOM.opponentGridSquares.forEach((square) => {
    square.addEventListener("click", function listener() {
      //! if shuffle button exists, hide it
      if ((DOM.shuffle.style.display = "block")) {
        DOM.shuffle.style.display = "none";
      }
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
};

export { gameLoop };
