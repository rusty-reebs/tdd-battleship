//TODO write a test, then make it pass

import { Ship } from "../src/ship";

// test("adds a hit", () => {
//   const battleship = Ship(4);
//   battleship.hit();
//   expect(hitCounter).toBe(1);
// });

// test.skip("battleship symbol is B", () => {
//   const battleship = Ship(4, "B");
//   expect(battleship.symbol).toEqual("B");
// });

test("battleship name is battleship", () => {
  const battleship = Ship("battleship");
  expect(battleship.name).toEqual("battleship");
});

// test("isSunk returns undefined when hits < length", () => {
//   const battleship = Ship(4, "B");
//   battleship.hit();
//   expect(battleship.isSunk()).toBe(undefined);
// });

test("isSunk returns undefined when hits < length", () => {
  const battleship = Ship("battleship");
  battleship.hit();
  expect(battleship.isSunk()).toBe(undefined);
});

// test("isSunk returns true when hits = length", () => {
//   const battleship = Ship(4, "B");
//   battleship.hit();
//   battleship.hit();
//   battleship.hit();
//   battleship.hit();
//   expect(battleship.isSunk()).toBe(true);
// });

test("isSunk returns true when hits = length", () => {
  const battleship = Ship("battleship");
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(true);
});

// describe("Ship factory tests", () => {
//   test.skip("adds a hit", () => {
//     const battleship = Ship(4);
//   });

//   test("marks position as hit", () => {
//     const battleship = Ship(4);
//     const output = ["-", "-", "-", "X"];
//     expect(battleship.hit(3)).toEqual(output);
//   });

//   test("isSunk returns false when all indexes != X", () => {
//     const battleship = Ship(4);
//     battleship.hit(0);
//     expect(battleship.isSunk()).toBe(false);
//   });

//   test("isSunk returns true when all indexes are X", () => {
//     const battleship = Ship(4);
//     battleship.hit(0);
//     battleship.hit(1);
//     battleship.hit(2);
//     battleship.hit(3);
//     battleship.hit(4);
//     expect(battleship.isSunk()).toBe(true);
//   });
// });
