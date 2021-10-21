// DOM methods

// example DOMStuff.gameOver
// DOMStuff.renderBoard
const body = document.querySelector("body");

const DOM = (() => {
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
    playerOneTitle.innerText = "Player One";
    const playerOneGridContainer = document.createElement("div");
    playerOneGridContainer.classList.add("grid");
    const playerTwoDiv = document.createElement("div");
    playerTwoDiv.classList.add("playercontainer");
    const playerTwoTitle = document.createElement("h2");
    playerTwoTitle.innerText = "Player Two";
    const playerTwoGridContainer = document.createElement("div");
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

    return { playerOneGridContainer };
  };

  const renderYourDisplay = () => {
    const buildGridSquare = () => {
      for (let i = 0; i <= 121; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.innerText = "X1";
        playerOneGridContainer.appendChild(gridSquare);
      }
    };
    buildGridSquare();
  };

  const renderOpponentDisplay = () => {};
  renderMain();
  renderYourDisplay();
  return { renderMain, renderYourDisplay, renderOpponentDisplay };
})();

export { DOM };
