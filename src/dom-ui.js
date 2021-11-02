// DOM methods

const DOM = (() => {
  const body = document.querySelector("body");
  const userGridContainer = document.createElement("div");
  const computerGridContainer = document.createElement("div");
  const messageDiv = document.createElement("div");
  const messageBox = document.createElement("div");
  const messageText = document.createElement("h2");
  const gameDiv = document.createElement("div");
  const shuffleDiv = document.createElement("div");
  const shuffle = document.createElement("div");

  const renderMain = () => {
    const content = document.createElement("div");
    content.classList.add("main");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    const titleImage = document.createElement("img");
    titleImage.src = "./img/battleship-title.png";
    titleImage.height = "200";
    const subtitle = document.createElement("h2");
    subtitle.innerText =
      "A project coded in plain JavaScript and CSS. Developed and tested with Jest.";
    messageDiv.classList.add("messagediv");
    messageBox.classList.add("messagebox");
    messageText.classList.add("messagetext");

    gameDiv.classList.add("gamediv");
    shuffleDiv.classList.add("shufflediv");
    shuffle.classList.add("shuffle");
    shuffle.innerText = "Shuffle";
    const userDiv = document.createElement("div");
    userDiv.classList.add("playercontainer");
    const userTitleDiv = document.createElement("div");
    userTitleDiv.classList.add("playeronetitle");
    const userTitle = document.createElement("h1");
    userTitle.innerText = "You";
    userGridContainer.classList.add("grid");
    const computerDiv = document.createElement("div");
    computerDiv.classList.add("playercontainer");
    const computerTitle = document.createElement("h1");
    computerTitle.innerText = "Computer";
    computerGridContainer.classList.add("grid");

    content.appendChild(titleDiv);
    titleDiv.appendChild(titleImage);
    titleDiv.appendChild(subtitle);
    content.appendChild(messageDiv);
    messageDiv.appendChild(messageBox);
    messageBox.appendChild(messageText);
    content.appendChild(gameDiv);
    gameDiv.appendChild(userDiv);
    userDiv.appendChild(userTitleDiv);
    userDiv.appendChild(userGridContainer);
    userTitleDiv.appendChild(userTitle);
    userTitleDiv.appendChild(shuffleDiv);
    shuffleDiv.appendChild(shuffle);
    gameDiv.appendChild(computerDiv);
    computerDiv.appendChild(computerTitle);
    computerDiv.appendChild(computerGridContainer);

    body.appendChild(content);
  };

  let userGridSquares = [];
  let computerGridSquares = [];

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

  const renderUserDisplay = () => {
    buildGrid(userGridContainer, userGridSquares);
  };

  const renderComputerDisplay = () => {
    buildGrid(computerGridContainer, computerGridSquares);
  };

  const renderHits = (gameboard, gridSquares) => {
    gameboard.array.forEach((coord, index) => {
      if (coord.hit) {
        gridSquares[index].classList.add("hit");
      }
    });
  };

  const renderMisses = (gameboard, gridSquares) => {
    gameboard.array.forEach((coord, index) => {
      if (coord.missedShot) {
        gridSquares[index].classList.add("miss");
      }
    });
  };

  const renderMessage = (text) => {
    messageBox.style.display = "flex";
    messageText.textContent = text;
  };

  const clearMessage = () => {
    messageBox.style.display = "none";
  };

  const renderGameOver = (message) => {
    gameDiv.classList.add("dim");
    renderMessage("Game Over! " + message);
  };

  renderMain();
  renderUserDisplay();
  renderComputerDisplay();
  renderMessage("Shuffle your ships or attack the enemy!");

  return {
    renderMessage,
    clearMessage,
    shuffle,
    userGridSquares,
    computerGridSquares,
    renderMisses,
    renderHits,
    renderGameOver,
  };
})();

export { DOM };
