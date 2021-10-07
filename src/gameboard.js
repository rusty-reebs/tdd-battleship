// TODO write gameboard factory function (one for each player)

//TODO place ships at specific coordinates by calling ship factory func
//TODO receiveAttack function that takes coordinates, determines whether a hit or not, then send hit function to correct ship, or records coords of missed shot
//TODO report whether all ships are sunk

const Ship = require("./ship");

const Gameboard = () => {
  let array = [];
  const buildArray = () => {
    let xcoord;
    let ycoord;
    for (interval = 1; interval <= 10; interval++) {
      ycoord = interval;
      for (i = 65; i < 75; i++) {
        xcoord = String.fromCharCode(i);
        let coord = xcoord.concat(ycoord);
        array.push(coord);
      }
    }
    return array;
  };
  // place ships with ship factory function
  const placeShip = (ship, coord) => {
    // need to orient ship
    let shipLength;
    switch (ship) {
      case "carrier":
        shipLength = 5;
        this.symbol = "C";
        break;
      case "battleship":
        shipLength = 4;
        this.symbol = "B";
        break;
      case "destroyer":
        shipLength = 3;
        this.symbol = "D";
        break;
      case "submarine":
        shipLength = 3;
        this.symbol = "S";
        break;
      case "patrol boat":
        shipLength = 2;
        this.symbol = "P";
    }
    ship = Ship(shipLength);
    //specify coord and start updating array
    //for battleship, place B B B B at A1, A2, A3, A4
    //find coord "A1" in array and then splice in
    let shipStart = array.indexOf(coord);
    for (i = 0; i < shipLength; i++) {
      array[shipStart + i] = this.symbol;
    }
  };
  return { array, buildArray, placeShip };
};

module.exports = Gameboard;
