const Gameboard = require("../src/gameboard");

describe("Gameboard tests", () => {
  test.skip("submarine returns symbol S", () => {
    const submarine = Ship(3);
    expect(submarine.symbol).toEqual("S");
  });

  test("gameboard array starts with A1 and ends with J10", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    let arrayLength = playerOneGameboard.array.length;
    expect(playerOneGameboard.array[0]).toEqual("A1");
    expect(playerOneGameboard.array[arrayLength - 1]).toEqual("J10");
  });

  test("carrier placed horizontally at A2", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("carrier", "A2");
    expect(playerOneGameboard.array[10]).toEqual("C");
  });

  test("battleship placed horizontally at A1", () => {
    const playerOneGameboard = Gameboard();
    playerOneGameboard.buildArray();
    playerOneGameboard.placeShip("battleship", "A1");
    expect(playerOneGameboard.array[0]).toEqual("B");
    expect(playerOneGameboard.array[1]).toEqual("B");
    expect(playerOneGameboard.array[2]).toEqual("B");
    expect(playerOneGameboard.array[3]).toEqual("B");
  });
});
