import { Ship } from "./ship";

const Gameboard = () => {
  let array = [];
  const buildArray = () => {
    let xcoord;
    let ycoord;
    for (let interval = 1; interval <= 10; interval++) {
      ycoord = interval;
      for (let i = 65; i < 75; i++) {
        xcoord = String.fromCharCode(i);
        let coord = { name: xcoord.concat(ycoord), x: xcoord, y: ycoord };
        array.push(coord);
      }
    }
    // console.log(array);
    return array;
  };

  let placedShips = [];

  const placeShip = (shipname, coord) => {
    shipname = Ship(shipname);
    const index = array.findIndex((coords) => coords.name === coord);
    // console.log(index);
    for (let i = 0; i < shipname.length; i++) {
      array[index + i].occupiedBy = shipname.name;
    }
    placedShips.push(shipname);
    console.log(shipname);
    console.log(placedShips);
  };

  const receiveAttack = (coord) => {
    let boatObject;
    const index = array.findIndex((coords) => coords.name === coord);
    console.log(index);
    switch (array[index].occupiedBy) {
      case "patrolboat":
        boatObject = placedShips.find((ship) => ship.name == "patrolboat");
        boatObject.hit();
        console.log("Hit", boatObject);
        console.log("Sunk", boatObject.isSunk());
        break;
      default:
        array[index].missedShot = true;
        console.log(array[index].missedShot);
    }
  };
  return { array, buildArray, placeShip, placedShips, receiveAttack };
};

export { Gameboard };
