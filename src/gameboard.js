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
  // let missedShots = [];

  const receiveAttack = (coord) => {
    const index = array.findIndex((coords) => coords.name === coord);
    console.log("Attack array index", index);
    if (!array[index].occupiedBy) {
      array[index].missedShot = true;
      // missedShots.push(coord);
      console.log("Missed shot", array[index]);
      // console.log("Missed shot", missedShots);
    } else {
      let shipObject;
      switch (array[index].occupiedBy.name) {
        case "patrolboat":
          shipObject = placedShips.find((ship) => ship.name === "patrolboat");
          break;
        case "submarine":
          shipObject = placedShips.find((ship) => ship.name === "submarine");
          break;
        case "destroyer":
          shipObject = placedShips.find((ship) => ship.name === "destroyer");
          break;
        case "battleship":
          shipObject = placedShips.find((ship) => ship.name === "battleship");
          break;
        case "carrier":
          shipObject = placedShips.find((ship) => ship.name === "carrier");

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
      }
    }
  };
  return {
    array,
    buildArray,
    placeShip,
    placedShips,
    // missedShots,
    receiveAttack,
  };
};

export { Gameboard };
