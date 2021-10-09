import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

const playerOneGameboard = Gameboard();
playerOneGameboard.buildArray();
const carrier = Ship(5, "C");
console.log(carrier);
playerOneGameboard.placeShip(carrier, "A2");
