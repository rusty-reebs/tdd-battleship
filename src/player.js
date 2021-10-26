// Player factory function

import { Gameboard } from "./gameboard";

const Player = (name) => {
  const generateCoords = () => {
    const letters = "ABCDEFGHIJ";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomLetter.concat(randomNumber);
  };

  const randomOrientation = () => {
    let randomNum = Math.random();
    if (randomNum <= 0.5) return "horizontal";
    else return "vertical";
  };

  let shotsFired = [];
  const attack = (enemy, coord) => {
    if (name === "computer") {
      let computerCoords = generateCoords();
      while (shotsFired.includes(computerCoords)) {
        computerCoords = generateCoords();
      }
      enemy.receiveAttack(computerCoords);
      shotsFired.push(computerCoords);
    } else enemy.receiveAttack(coord);
  };
  return { name, attack, generateCoords, randomOrientation };
};

export { Player };
