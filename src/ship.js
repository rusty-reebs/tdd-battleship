// Ship factory function

const Ship = (shipname) => {
  let name;
  let length;
  let hits = 0;
  switch (shipname) {
    case "carrier":
      name = shipname;
      length = 5;
      break;
    case "battleship":
      name = shipname;
      length = 4;
      break;
    case "destroyer":
      name = shipname;
      length = 3;
      break;
    case "submarine":
      name = shipname;
      length = 3;
      break;
    case "patrolboat":
      name = shipname;
      length = 2;
  }
  let hitCounter = 0;
  const hit = () => {
    hitCounter++;
    return hitCounter;
  };

  const isSunk = () => {
    if (hitCounter === length) return true;
    else return false;
  };
  return { name, length, hit, hitCounter, hits, isSunk };
};

export { Ship };
