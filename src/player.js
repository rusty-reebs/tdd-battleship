// Player factory function

import { Gameboard } from "./gameboard";

const Player = (name) => {
  const attack = (enemy, coord) => {
    // calls opposite player gameboard.receive attack
    // if name == computer then => logic to attack, eg random numbers
    enemy.receiveAttack(coord);
  };
  return { name, attack };
};

export { Player };
