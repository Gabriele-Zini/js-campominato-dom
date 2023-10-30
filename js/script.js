// VARIABILI

// container delle celle
const container = document.querySelector(".container");

// select btn
const select = document.getElementById("level");

// playbtn
const playBtn = document.getElementById("play-btn");

// title
const title = document.querySelector(".title");
const titleContainer = document.querySelector(".title-container");

// array bombs
let bombs = [];

// EVENTLISTENER

// addEventLisener del select
select.addEventListener("change", handleSelect);

// addEventListener del play-btn
playBtn.addEventListener("click", handlePlayBtn);

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
  newCell.addEventListener("click", handleClick);
  return newCell;
}

// funzione per gestire il click sulla singola cella
function handleClick() {
  const innerNumber = parseInt(this.textContent);
  if (bombs.includes(innerNumber)) {
    this.classList.add("rd-bg");
  } else {
    this.classList.add("light-blue");
  }
  console.log(innerNumber);
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
    if (value === "easy") {
      createGrid(100);
      container.classList.add("d-hidden");
      title.classList.remove("d-hidden");
      bombs = createBombs(16, 100);
      console.log(bombs);
    } else if (value === "normal") {
      createGrid(81);
      container.classList.add("d-hidden");
      title.classList.remove("d-hidden");
      bombs = createBombs(16, 81);
      console.log(bombs);
    } else if (value === "hard") {
      createGrid(49);
      container.classList.add("d-hidden");
      title.classList.remove("d-hidden");
      bombs = createBombs(16, 49);
      console.log(bombs);
    }
  }
}

// funzione per gestire il tasto play
function handlePlayBtn() {
  let value = select.value;
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
  while (bombs.length < numBombs) {
    const bomb = randomNumber(numCells);
    if (!bombs.includes(bomb)) {
      bombs.push(bomb);
    }
  }
  return bombs;
}
