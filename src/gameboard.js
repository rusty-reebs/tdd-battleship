import { Ship } from "./ship";

const Gameboard = () => {
  let array = [];
  const buildArray = () => {
    let xcoord;
    let ycoord;
    for (let i = 65; i < 75; i++) {
      ycoord = String.fromCharCode(i);
      for (let i = 1; i <= 10; i++) {
        xcoord = i;
        let coord = { name: ycoord.concat(xcoord), x: xcoord, y: ycoord };
        array.push(coord);
      }
    }
    // console.log(array);
    return array;
  };

  //TODO vertical placement of ships
  //TODO not exceed boundaries
  //TODO not overlapping other ships

  let placedShips = [];
  const placeShip = (shipname, coord, orientation) => {
    shipname = Ship(shipname);
    const index = array.findIndex((coords) => coords.name === coord);
    // if orientation === horizontal then cannot wrap
    // 10 - length index not greater than 10-length
    // if (orientation === "horizontal") && shipname.length {

    // }
    // if orientation === vertical then cannot exceed A10-J10
    //! need to check the indexes first for occupiedBy?
    let vacant;
    for (let i = 1; i < shipname.length; i++) {
      if (
        orientation === "horizontal" &&
        !array[index + i].occupiedBy &&
        !array[index].occupiedBy
      ) {
        vacant = true;
        console.log("yay, those spots are vacant");
      } else if (
        orientation === "vertical" &&
        !array[index + i * 10].occupiedBy &&
        !array[index].occupiedBy
      ) {
        vacant = true;
        console.log("yay, those spots are vacant");
      } else console.error("Error, one of those coords is occupied");
    }
    if (vacant) {
      //! after indexes are confirmed vacant do this:
      array[index].occupiedBy = shipname;
      for (let i = 1; i < shipname.length; i++) {
        switch (orientation) {
          case "horizontal":
            array[index + i].occupiedBy = shipname;
            break;
          case "vertical":
            array[index + i * 10].occupiedBy = shipname;
        }
      }

      placedShips.push(shipname);
      //! end
    }

    // console.log(shipname);

    console.log(placedShips);
  };

  let sunkShips = [];
  // let missedShots = [];

  const receiveAttack = (coord) => {
    const index = array.findIndex((coords) => coords.name === coord);
    console.log("Attack array index", index);
    console.log("occupied by", array[index].occupiedBy);
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
      }
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
