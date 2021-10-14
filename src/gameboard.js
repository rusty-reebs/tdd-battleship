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
    for (let i = 0; i < shipname.length; i++) {
      array[index + i].occupiedBy = shipname;
    }
    placedShips.push(shipname);
    console.log(shipname);
    console.log(placedShips);
  };

  let sunkShips = [];
  const receiveAttack = (coord) => {
    let shipObject;
    const index = array.findIndex((coords) => coords.name === coord);
    console.log("Attack array index", index);
    if (!array[index].occupiedBy) {
      array[index].missedShot = true;
      console.log("Missed shot", array[index]);
    } else
      switch (array[index].occupiedBy.name) {
        case "patrolboat":
          shipObject = placedShips.find((ship) => ship.name === "patrolboat");
          shipObject.hit();
          shipObject.hits++;

          console.log("Hit", shipObject);
          console.log("HitCounter", shipObject.hitCounter);
          console.log("Hits", shipObject.hits);
          console.log("Sunk", shipObject.isSunk());
          if (shipObject.isSunk()) {
            sunkShips.push(shipObject);
            console.log("Sunk ships", sunkShips);
          }
          break;
        default:
        // array[index].missedShot = true;
        // console.log("Missed shot", array[index].missedShot);
      }
  };
  return { array, buildArray, placeShip, placedShips, receiveAttack };
};

export { Gameboard };
