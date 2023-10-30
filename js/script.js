// VARIABILI

// container delle celle
const container = document.querySelector(".container");

// select btn
const select = document.getElementById("level");

// playbtn
const playBtn = document.getElementById("play-btn");

// numero di celle cliccate
let cellClicked = 0;
let cellClickedArray = [];

// title
const title = document.querySelector(".title");
const titleContainer = document.querySelector(".title-container");

// array bombs
let bombs = [];

// messagio end-game
let message = document.querySelector(".end-game-msg");
let messageContent = document.querySelector(".message-content");

// restart btn
const restart = document.querySelector(".restart");

// EVENTLISTENER

// addEventLisener del select
select.addEventListener("change", handleSelect);

// addEventListener del play-btn
playBtn.addEventListener("click", handlePlayBtn);

// addEventListener del restart-btn
restart.addEventListener("click", handleRestart);

// FUNZIONI

// funzione per creare la griglia
function createGrid(numMax) {
  for (let i = 1; i <= numMax; i++) {
    const cell = generateCell(numMax);
    cell.textContent = i;
    container.append(cell);
  }
}

// funzione per creare una singola cella
function generateCell(numMax) {
  const newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.style.width = `${100 / Math.sqrt(numMax)}%`;
  // addEventlistener di ogni cella
  newCell.addEventListener("click", handleClick);
  return newCell;
}

// funzione per gestire il click sulla singola cella
function handleClick() {
  const cell = document.querySelectorAll(".cell");
  let easy = 100;
  let medium = 81;
  let hard = 49;
  let value = select.value;
  const innerNumber = parseInt(this.textContent);
  if (
    !this.classList.contains("light-blue") &&
    !this.classList.contains("rd-bg")
  ) {
    if (bombs.includes(innerNumber)) {
      for (let i = 0; i < bombs.length; i++) {
        const bombCell = document.querySelector(`.cell:nth-child(${bombs[i]})`);
        bombCell.classList.add("rd-bg");
      } /* ciclo for per iterare su tutte le celle con una bomba */
      messageContent.textContent = `Hai perso, celle blu cliccate: ${cellClicked}`; /* messaggio di game over */
      message.classList.remove("d-hidden");
      for (let i = 0; i < cell.length; i++) {
        cell[i].removeEventListener("click", handleClick);
      } /* ciclo per rimuovere su ogni cella l'eventListener */
    } else {
      this.classList.add("light-blue");
      cellClicked += 1;
      cellClickedArray.push(this);
      console.log("numero di celle cliccate " + cellClicked);
      //   console.log(innerNumber);
      if (cellClicked === easy - 16 && value === "facile") {
        messageContent.textContent = `Hai vinto, celle blu cliccate: ${cellClicked}`;
        message.classList.remove("d-hidden");
        for (let i = 0; i < cell.length; i++) {
          cell[i].removeEventListener("click", handleClick);/* ciclo per rimuovere su ogni cella l'eventListener */
        }
      } else if (cellClicked === medium - 16 && value === "medio") {
        messageContent.textContent = `Hai vinto, celle blu cliccate: ${cellClicked}`;
        message.classList.remove("d-hidden");
        for (let i = 0; i < cell.length; i++) {
          cell[i].removeEventListener("click", handleClick);/* ciclo per rimuovere su ogni cella l'eventListener */
        }
      } else if (cellClicked === hard - 16 && value === "difficile") {
        messageContent.textContent = `Hai vinto, celle blu cliccate: ${cellClicked}`;
        message.classList.remove("d-hidden");
        for (let i = 0; i < cell.length; i++) {
          cell[i].removeEventListener("click", handleClick);/* ciclo per rimuovere su ogni cella l'eventListener */
        }
      }
    }
  }
}

// funzione per gestire il select
function handleSelect() {
  bombs = [];
  let value = select.value;
  container.innerHTML = "";
  title.innerHTML = `Hai scelto il livello ${value}, clicca play per iniziare a giocare`;
  if (value === "default") {
    title.innerHTML = "Scegli un livello di gioco";
    container.classList.add("d-hidden");
    title.classList.remove("d-hidden");
    titleContainer.classList.remove("d-hidden");
  } else {
    if (value === "facile") {
      createGrid(100);
      container.classList.add("d-hidden");
      title.classList.remove("d-hidden");
      titleContainer.classList.remove("d-hidden");
      bombs = createBombs(16, 100);
      console.log(bombs);
    } else if (value === "medio") {
      createGrid(81);
      container.classList.add("d-hidden");
      title.classList.remove("d-hidden");
      titleContainer.classList.remove("d-hidden");
      bombs = createBombs(16, 81);
      console.log(bombs);
    } else if (value === "difficile") {
      createGrid(49);
      container.classList.add("d-hidden");
      title.classList.remove("d-hidden");
      titleContainer.classList.remove("d-hidden");
      bombs = createBombs(16, 49);
      console.log(bombs);
    }
  }
}

// funzione per gestire il tasto play
function handlePlayBtn() {
  let value = select.value;
  message.classList.add("d-hidden");
  if (value !== "default") {
    title.classList.add("d-hidden");
    titleContainer.classList.add("d-hidden");
    container.classList.remove("d-hidden");
  }
}

/* funzione per creare numeri casuali */
function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

/* funzione che crea l'array bombs */
function createBombs(numBombs, numCells) {
  bombs = [];
  while (bombs.length < numBombs) {
    const bomb = randomNumber(numCells);
    if (!bombs.includes(bomb)) {
      bombs.push(bomb);
    }
  }
  return bombs;
}

// funzione del restart click
function handleRestart() {
  cellClicked = 0;
  cellClickedArray = [];
  const cell = document.querySelectorAll(".cell");
  for (let i = 0; i < cell.length; i++) {
    cell[i].classList.remove("light-blue");
  }
  for (let i = 0; i < bombs.length; i++) {
    const bombCell = document.querySelector(`.cell:nth-child(${bombs[i]})`);
    bombCell.classList.remove("rd-bg");
  }
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", handleClick);
  }
  message.classList.add("d-hidden");
}
