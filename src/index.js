//TODO write a test, then make it pass

//TODO do your best to isolate the app functionality from DOM manipulation

//TODO write ship factory function

const Ship = (length) => {
  let hitArray = [];
  for (i = 0; i < length; i++) {
    hitArray.push("-");
  }
  const hit = (index) => {
    hitArray.splice(index, 1, "X");
    return hitArray;
  };
  const isSunk = () => {
    return hitArray.every((current) => current == "X");
  };
  return { length, hitArray, hit, isSunk };
};

const battleship = Ship(5);
console.log(battleship.hitArray);

module.exports = battleship;
