// ran npm install --save-dev babel-jest @babel/core @babel/preset-env and babel.config.js to use import/export with webpack and jest.

import { Gameboard } from "./gameboard";
import { Player } from "./player";

const player1 = Player("Captain");
const player2 = Player("Admiral");
const playerOneGameboard = Gameboard();
playerOneGameboard.buildArray();
playerOneGameboard.placeShip("battleship", "A1", "horizontal");
playerOneGameboard.placeShip("carrier", "B1", "vertical");
console.log(playerOneGameboard.array);
// player2.attack(playerOneGameboard, "A1");
// player2.attack(playerOneGameboard, "B1");
// playerOneGameboard.receiveAttack("A1");
// playerOneGameboard.receiveAttack("B1");
// console.log(playerOneGameboard.array[0]);
// console.log(playerOneGameboard.array[1]);
// console.log(playerOneGameboard.array[2]);
// console.log(playerOneGameboard.array[3]);
// console.log(playerOneGameboard.array[4]);
// console.log(playerOneGameboard.array[5]);
// console.log(playerOneGameboard.array[6]);
// console.log(playerOneGameboard.array[7]);
// console.log(playerOneGameboard.array[8]);
// console.log(playerOneGameboard.array[9]);

// playerOneGameboard.placeShip("carrier", "A6", "vertical");
// console.log(playerOneGameboard.array[1]);
// console.log(playerOneGameboard.array[11]);
// console.log(playerOneGameboard.array[21]);
// console.log(playerOneGameboard.array[31]);
// console.log(playerOneGameboard.array[41]);
// console.log(playerOneGameboard.array[51]);

// let patrolboat = playerOneGameboard.placedShips.find(
//   (ship) => ship.name == "patrolboat"
// );
// console.log(patrolboat);

// const player1 = Player("Captain");
// const player2 = Player("computer");
// const playerOneGameboard = Gameboard();
// playerOneGameboard.buildArray();
// playerOneGameboard.placeShip("patrolboat", "A1");
// playerOneGameboard.placeShip("battleship", "A2");
// playerOneGameboard.placeShip("carrier", "A3");
// playerOneGameboard.placeShip("destroyer", "A4");
// playerOneGameboard.placeShip("submarine", "A5");
// console.log(playerOneGameboard.array[0]);
// console.log(playerOneGameboard.array[1]);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// player2.attack(playerOneGameboard);
// let carrier = playerOneGameboard.placedShips.find(
//   (ship) => ship.name == "carrier"
// );
// console.log(carrier);
