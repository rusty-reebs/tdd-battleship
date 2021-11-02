// ran npm install --save-dev babel-jest @babel/core @babel/preset-env and babel.config.js to use import/export with webpack and jest.

import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { gameLoop } from "./gameloop";

gameLoop();
