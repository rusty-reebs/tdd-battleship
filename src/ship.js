//TODO write a test, then make it pass

//TODO do your best to isolate the app functionality from DOM manipulation

// add hit to array, if array length matches ship length then sunk
// add hit to counter, if counter matches length then sunk?

const Ship = (length, symbol) => {
  this.symbol = symbol;
  let hitCounter = 0;
  const hit = () => {
    hitCounter++;
  };
  const isSunk = () => {
    if (hitCounter === length) return true;
  };
  return { hit, isSunk, symbol };
};

// const carrier = Ship(5, "C");
// const battleship = Ship(4, "B");
// const destroyer = Ship(3, "D");
// const patrolboat = Ship(2, "P");

//old ship
// const Ship = (length) => {
//   let hitArray = [];
//   for (i = 0; i < length; i++) {
//     hitArray.push("-");
//   }
//   const hit = (index) => {
//     hitArray.splice(index, 1, "X");
//     return hitArray;
//   };
//   const isSunk = () => {
//     return hitArray.every((current) => current == "X");
//   };
//   return { length, hitArray, hit, isSunk };
// };

module.exports = Ship;
