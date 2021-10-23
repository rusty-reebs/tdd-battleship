// DOM methods

// example DOMStuff.gameOver
// DOMStuff.renderBoard

const DOM = (() => {
  const body = document.querySelector("body");
  const playerOneGridContainer = document.createElement("div");
  const playerTwoGridContainer = document.createElement("div");

  const renderMain = () => {
    const content = document.createElement("div");
    content.classList.add("main");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    const title = document.createElement("h1");
    title.innerText = "The Classic Game of Battleship!";
    const subtitle = document.createElement("h3");
    subtitle.innerText =
      "A project coded in plain JavaScript and CSS. Developed and tested with Jest.";
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("gamediv");
    const playerOneDiv = document.createElement("div");
    playerOneDiv.classList.add("playercontainer");
    const playerOneTitle = document.createElement("h2");
    playerOneTitle.innerText = "You";
    // const playerOneGridContainer = document.createElement("div");
    playerOneGridContainer.classList.add("grid");
    const playerTwoDiv = document.createElement("div");
    playerTwoDiv.classList.add("playercontainer");
    const playerTwoTitle = document.createElement("h2");
    playerTwoTitle.innerText = "Computer";
    // const playerTwoGridContainer = document.createElement("div");
    playerTwoGridContainer.classList.add("grid");

    content.appendChild(titleDiv);
    titleDiv.appendChild(title);
    titleDiv.appendChild(subtitle);
    content.appendChild(gameDiv);
    gameDiv.appendChild(playerOneDiv);
    playerOneDiv.appendChild(playerOneTitle);
    playerOneDiv.appendChild(playerOneGridContainer);
    gameDiv.appendChild(playerTwoDiv);
    playerTwoDiv.appendChild(playerTwoTitle);
    playerTwoDiv.appendChild(playerTwoGridContainer);

    body.appendChild(content);
  };

  let yourGridSquares = [];
  let opponentGridSquares = [];
  const buildGrid = (playerContainer, playerArray) => {
    for (let i = 1; i <= 100; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("gridsquare");
      // gridSquare.innerText = "X1";
      playerContainer.appendChild(gridSquare);
      // put gridSquares in array, export array and use forEach in gameloop to populate gridSquare contents?
      playerArray.push(gridSquare);
    }
  };

  const renderYourDisplay = () => {
    buildGrid(playerOneGridContainer, yourGridSquares);
  };

  const renderOpponentDisplay = () => {
    buildGrid(playerTwoGridContainer, opponentGridSquares);
  };

  return {
    renderMain,
    renderYourDisplay,
    renderOpponentDisplay,
    yourGridSquares,
    opponentGridSquares,
  };
})();

export { DOM };
