import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { DOM } from "./dom-ui";

const gameLoop = () => {
  const user = Player("user");
  const computer = Player("computer");
  const userGameboard = Gameboard();
  const computerGameboard = Gameboard();

  const ships = [
    "carrier",
    "battleship",
    "destroyer",
    "submarine",
    "patrolboat",
  ];

  userGameboard.buildArray();
  let shipObject;

  ships.forEach((ship) => {
    do {
      userGameboard.placeShip(
        ship,
        user.generateCoords(),
        user.randomOrientation()
      );
      shipObject = userGameboard.placedShips.find((obj) => obj.name === ship);
    } while (!shipObject);
  });

  DOM.userGridSquares.forEach((square, index) => {
    if (userGameboard.array[index].occupiedBy) {
      square.classList.add("occupied");
    }
  });

  DOM.shuffle.addEventListener("click", () => {
    location.reload();
  });

  computerGameboard.buildArray();

  ships.forEach((ship) => {
    do {
      computerGameboard.placeShip(
        ship,
        computer.generateCoords(),
        computer.randomOrientation()
      );
      shipObject = computerGameboard.placedShips.find(
        (obj) => obj.name === ship
      );
    } while (!shipObject);
  });

  //! uncomment to show computer ships
  // DOM.computerGridSquares.forEach((square, index) => {
  // if (computerGameboard.array[index].occupiedBy) {
  // square.classList.add("occupied");
  // }
  // });

  let gameOver = false;
  const checkGameOver = (gameboard) => {
    if (gameboard.sunkShips.length == 5 && !gameOver) {
      if (gameboard === userGameboard) {
        DOM.renderGameOver("Computer wins!");
      }
      if (gameboard === computerGameboard) {
        DOM.renderGameOver("You win!");
      }
      gameOver = true;
      return true;
    }
  };

  DOM.computerGridSquares.forEach((square) => {
    square.addEventListener("click", function listener() {
      if ((DOM.shuffle.style.display = "block")) {
        DOM.shuffle.style.display = "none";
        DOM.clearMessage();
      }
      user.attack(computerGameboard, square.dataset.coord),
        DOM.renderMisses(computerGameboard, DOM.computerGridSquares);
      DOM.renderHits(computerGameboard, DOM.computerGridSquares);
      if (checkGameOver(computerGameboard)) {
        DOM.computerGridSquares.forEach((square) => {
          square.removeEventListener("click", listener);
        });
        return;
      }
      setTimeout(() => {
        computer.attack(userGameboard);
        DOM.renderMisses(userGameboard, DOM.userGridSquares);
        DOM.renderHits(userGameboard, DOM.userGridSquares);
        if (checkGameOver(userGameboard)) {
          square.removeEventListener("click", listener);
          return;
        }
      }, 300);
    });
  });
};

export { gameLoop };
