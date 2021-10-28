// DOM methods

// example DOMStuff.gameOver
// DOMStuff.renderBoard

const DOM = (() => {
  const body = document.querySelector("body");
  const playerOneGridContainer = document.createElement("div");
  const playerTwoGridContainer = document.createElement("div");
  const messageDiv = document.createElement("div");
  const gameDiv = document.createElement("div");

  const renderMain = () => {
    const content = document.createElement("div");
    content.classList.add("main");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    const titleImage = document.createElement("img");
    titleImage.src = "../img/battleship-title.png";
    titleImage.height = "200";
    const subtitle = document.createElement("h2");
    subtitle.innerText =
      "A project coded in plain JavaScript and CSS. Developed and tested with Jest.";
    messageDiv.classList.add("messagediv");
    // const gameDiv = document.createElement("div");
    gameDiv.classList.add("gamediv");
    const playerOneDiv = document.createElement("div");
    playerOneDiv.classList.add("playercontainer");
    const playerOneTitle = document.createElement("h1");
    playerOneTitle.innerText = "You";
    // const playerOneGridContainer = document.createElement("div");
    playerOneGridContainer.classList.add("grid");
    const playerTwoDiv = document.createElement("div");
    playerTwoDiv.classList.add("playercontainer");
    const playerTwoTitle = document.createElement("h1");
    playerTwoTitle.innerText = "Computer";
    // const playerTwoGridContainer = document.createElement("div");
    playerTwoGridContainer.classList.add("grid");

    content.appendChild(titleDiv);
    titleDiv.appendChild(titleImage);
    titleDiv.appendChild(subtitle);
    content.appendChild(messageDiv);
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
    let coord;
    for (let i = 65; i < 75; i++) {
      let ycoord = String.fromCharCode(i);
      for (let i = 1; i <= 10; i++) {
        let xcoord = i;
        coord = ycoord.concat(xcoord);
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridsquare");
        gridSquare.dataset.coord = coord;
        playerContainer.appendChild(gridSquare);
        playerArray.push(gridSquare);
      }
    }
  };

  const renderYourDisplay = () => {
    //TODO do same as below?
    buildGrid(playerOneGridContainer, yourGridSquares);
  };

  const renderOpponentDisplay = () => {
    buildGrid(playerTwoGridContainer, opponentGridSquares);
  };

  //! new
  const renderHits = (gameboard, gridSquares) => {
    gameboard.array.forEach((coord, index) => {
      if (coord.hit) {
        gridSquares[index].classList.add("hit");
      }
    });
  };

  //! new
  const renderMisses = (gameboard, gridSquares) => {
    gameboard.array.forEach((coord, index) => {
      if (coord.missedShot) {
        gridSquares[index].classList.add("miss");
      }
    });
  };

  const renderMessage = (text) => {
    const messageBox = document.createElement("div");
    messageBox.classList.add("messagebox");
    const messageText = document.createElement("h2");
    messageText.classList.add("messagetext");
    messageText.textContent = text;
    messageDiv.appendChild(messageBox);
    messageBox.appendChild(messageText);
  };

  const renderGameOver = (gameboard) => {
    gameDiv.classList.add("dim");
    if (gameboard == "playerOneGameboard") {
      renderMessage("Game Over! Computer Wins!");
    } else renderMessage("Game Over! You win!");
  };

  // }

  return {
    renderMain,
    renderMessage,
    renderYourDisplay,
    renderOpponentDisplay,
    yourGridSquares,
    opponentGridSquares,
    renderMisses,
    renderHits,
    renderGameOver,
  };
})();

export { DOM };
