// ran npm install --save-dev babel-jest @babel/core @babel/preset-env and babel.config.js to use import/export with webpack and jest.

import { Gameboard } from "./gameboard";

const playerOneGameboard = Gameboard();
playerOneGameboard.buildArray();
playerOneGameboard.placeShip("patrolboat", "A1");
playerOneGameboard.placeShip("battleship", "A2");
playerOneGameboard.placeShip("carrier", "A3");
playerOneGameboard.placeShip("destroyer", "A4");
playerOneGameboard.placeShip("submarine", "A5");
console.log(playerOneGameboard.array[0]);
console.log(playerOneGameboard.array[1]);
playerOneGameboard.receiveAttack("J1");
playerOneGameboard.receiveAttack("A1");
playerOneGameboard.receiveAttack("B1");
let patrolboat = playerOneGameboard.placedShips.find(
  (ship) => ship.name == "patrolboat"
);
console.log(patrolboat);
