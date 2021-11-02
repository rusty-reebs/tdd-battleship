
Ships
------
Carrier 5
Battleship 4
Destroyer 3
Submarine 3
Patrol Boat 2

Grid 10 x 10

  A  B  C  D  E  F  G  H  I  J
1
2
3
4
5
6
7
8
9
10

You make a ship and add it an array. Suppose you added two ships battleship and patrolboat. 
your array looks like this -
[{name: 'patrolboat', length: 2, hit: ƒ, isSunk: ƒ},{name: 'battleship', length: 5, hit: ƒ, isSunk: ƒ}]

Now later in the code somewhere you have to use hit function. So you find the ship from the array using array find. After you find the object you store it in a variable named - let hitship. 
So you can use hitship.hit() to invoke the method. You do not need explicit variable names to invoke methods. you do not use the same names. So hitship.hit() was just as you were invoking battleship.hit(). 


New ship factory function notes

Ship {
  name:
  length: 
  locationArray: [{X: Y:}, {X: Y:}]
  hitCount:
  hitArray: [{X: Y:}, {X: Y:}]
  hit()
  isSunk()
}

//! No gameboard array? Not necessary? Track location and hits in ship object. May need the array for UI.

Gameboard {
  placeShip() --> calls ship factory function
  receiveAttack() --> calls hit function for correct ship, or records coords of missed shot
  missedShots: [{X: Y:}, {X: Y:}]
  placedShips: ["carrier", "submarine", "patrolboat"] --> when array is full then begin game
  sunkShips: ["battleship", "destroyer"] --> push to array when isSunk = true
}

Player {
  attack() => calls opposite gameboard.receiveAttack
}

**Main game loop should step through game turn by turn by only calling methods from other objects

gameLoop () => {
  create Player
  create Gameboards

}

can add +10 or -10 to index to check against vertical placement?

TODO:

Jest mock functions
