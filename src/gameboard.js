import { Ship } from "./ship";

const Gameboard = () => {
  let array = [];
  const buildArray = () => {
    for (let i = 65; i < 75; i++) {
      let ycoord = String.fromCharCode(i);
      let ycoordNum = i - 64;
      for (let i = 1; i <= 10; i++) {
        let xcoord = i;
        let coord = {
          name: ycoord.concat(xcoord),
          x: xcoord,
          y: ycoord,
          yNum: ycoordNum,
        };
        array.push(coord);
      }
    }
    // console.log(array);
    return array;
  };

  let placedShips = [];
  const placeShip = (shipname, coord, orientation) => {
    shipname = Ship(shipname);
    const index = array.findIndex((coords) => coords.name === coord);

    let fitHorizontal = false;
    if (
      orientation === "horizontal" &&
      shipname.length <= 10 - array[index].x + 1
    ) {
      fitHorizontal = true;
      console.log("fits horizontal", fitHorizontal);
    }

    let fitVertical = false;
    if (
      orientation === "vertical" &&
      shipname.length <= 10 - array[index].yNum + 1
    ) {
      fitVertical = true;
      console.log("fits vertical", fitVertical);
    }

    let vacant;
    let vacantArray = [false];
    if (fitHorizontal || fitVertical) {
      vacantArray = [];
      for (let i = 1; i < shipname.length; i++) {
        if (orientation === "horizontal") {
          if (!array[index + i].occupiedBy && !array[index].occupiedBy) {
            vacant = true;
            vacantArray.push(vacant);
          } else {
            vacant = false;
            vacantArray.push(vacant);
          }
          console.log(vacantArray);
        }
        if (orientation === "vertical") {
          if (!array[index + i * 10].occupiedBy && !array[index].occupiedBy) {
            vacant = true;
            vacantArray.push(vacant);
          } else {
            vacant = false;
            vacantArray.push(vacant);
          }
          console.log(vacantArray);
        }
      }
    }

    if (!vacantArray.includes(false)) {
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
