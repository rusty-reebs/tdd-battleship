// Player factory function

const Player = (name) => {
  const generateCoords = () => {
    const letters = "ABCDEFGHIJ";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomLetter.concat(randomNumber);
  };

  let shotsFired = [];
  const attack = (enemy, coord) => {
    if (name === "computer") {
      // let misses = Gameboard["missedShots"];
      // console.log(misses);
      let computerCoords = generateCoords();
      while (shotsFired.includes(computerCoords)) {
        computerCoords = generateCoords();
      }
      enemy.receiveAttack(computerCoords);
      shotsFired.push(computerCoords);
      console.log("shots fired", shotsFired);
    } else enemy.receiveAttack(coord);
  };
  return { name, attack };
};

export { Player };
