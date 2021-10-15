// Player factory function

import { Gameboard } from "./gameboard";

const Player = (name) => {
  const generateCoords = () => {
    //random x axis
    const letters = "ABCDEFGHIJ";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    //random y axis
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomLetter.concat(randomNumber);
  };

  const attack = (enemy, coord) => {
    let computerCoords;
    if (name === "computer") {
      //logic for generating random coords, incld not shoot same coord twice
      let misses = Gameboard["missedShots"];
      console.log(misses);
      computerCoords = generateCoords();
      // while (Gameboard["missedShots"].includes(computerCoords)) {
      // computerCoords = generateCoords();
      // }
      enemy.receiveAttack(computerCoords);
    } else enemy.receiveAttack(coord);
  };
  return { name, attack };
};

export { Player };
