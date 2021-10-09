// TODO write gameboard factory function (one for each player)

//TODO place ships at specific coordinates by calling ship factory func
//TODO receiveAttack function that takes coordinates, determines whether a hit or not, then send hit function to correct ship, or records coords of missed shot
//TODO report whether all ships are sunk

const Gameboard = () => {
  let array = [];
  const buildArray = () => {
    let xcoord;
    let ycoord;
    for (let interval = 1; interval <= 10; interval++) {
      ycoord = interval;
      for (let i = 65; i < 75; i++) {
        xcoord = String.fromCharCode(i);
        let coord = xcoord.concat(ycoord);
        array.push(coord);
      }
    }
    return array;
  };
  // place ships with ship factory function
  const placeShip = (shipname, coord) => {
    //specify coord and start updating array
    //for battleship, place B B B B at A1, A2, A3, A4
    //find coord "A1" in array and then splice in
    const index = array.findIndex((coords) => coords === coord);
    for (let i = 0; i < shipname.length; i++) {
      array[index + i] = shipname.symbol;
    }
    return console.log(array[10]);
  };
  //   const receiveAttack = (coord) => {
  //     //if coord in array equals C, B, D, S, P, then call Ship.hit
  //     let attackIndex = array.indexOf(coord);
  //     switch (array[attackIndex]) {
  //       case "P":
  //         // patrolboat.hit but where on patrolboat? does it matter? or just 1/2
  //         patrolboat.hit();
  //         break;
  //     }
  //   };
  return { array, buildArray, placeShip };
};

export { Gameboard };
