## ESERCIZIO

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

---

Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

### SOLUZIONE

**Logica del Programma**

1. implementare una funzione che genera numeri casuali in un range da min a max;
2. implementare funzione che genera n numeri casuali tutti diversi nel range da min a max e li pusha in un array chiamato "bombs"
3. creare una funzione che gestisca il click sulle celle:
   - se l'utente becca una bomba tutte le celle che sono nell'array bombs si colorano di rosso e l'utente perde
   - altrimenti la cella si colora di blu e l'utente continua a giocare
4. creare una funzione per gestire l'esito della partita
   - quando l'utente clicca su una bomba si attivano tutte le altre celle con il numero presente nell'array bombs

```javascript
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
      messageContent.textContent = `Hai perso dopo ${cellClicked} tentativi`; /* messaggio di game over */
      message.classList.remove("d-hidden");
      for (let i = 0; i < cell.length; i++) {
        cell[i].removeEventListener("click", handleClick);
      } /* ciclo per rimuovere su ogni cella l'eventListener */
    }
```

- quando l'utente clicca sulle caselle senza bomba per un numero di numeroTotaleCaselle - NumeroBombe

```javascript
else {
      this.classList.add("light-blue");
      cellClicked += 1;
      cellClickedArray.push(this);
      console.log("numero di celle cliccate " + cellClicked);
      //   console.log(innerNumber);
      if (cellClicked === easy - 16 && value === "facile") {
        messageContent.textContent = `Hai vinto!`;
        message.classList.remove("d-hidden");
        for (let i = 0; i < cell.length; i++) {
          cell[i].removeEventListener(
            "click",
            handleClick
          ); /* ciclo per rimuovere su ogni cella l'eventListener */
        }
      } else if (cellClicked === medium - 16 && value === "medio") {
        messageContent.textContent = `Hai vinto!`;
        message.classList.remove("d-hidden");
        for (let i = 0; i < cell.length; i++) {
          cell[i].removeEventListener(
            "click",
            handleClick
          ); /* ciclo per rimuovere su ogni cella l'eventListener */
        }
      } else if (cellClicked === hard - 16 && value === "difficile") {
        messageContent.textContent = `Hai vinto!`;
        message.classList.remove("d-hidden");
        for (let i = 0; i < cell.length; i++) {
          cell[i].removeEventListener(
            "click",
            handleClick
          ); /* ciclo per rimuovere su ogni cella l'eventListener */
        }
      }
    }

```

5. implentare un button di restart per quandpo finisce la partita.

   - il cellClicked, variabile che tiene conto dei click senza bombte, viene resettato a 0
   - il cellClikedArray viene svuotato di tutti i suoi valori.
   - si crea una nodeList chiamata cell con tutti gli elementi con classe ".cell" e si itera su questo array per rimuovere la classe con background-color blu e per riaggiungere l'eventListener del click alle celle.
   - si itera anche sull'array bombs per rimuovere a tutte le bombe la classe con il background-color red;
   - si invoca la funzione handleSelect() per restartare il gioco;

```javascript
// funzione del restart click
function handleRestart() {
  cellClicked = 0;
  cellClickedArray = [];
  const cell = document.querySelectorAll(".cell");
  for (let i = 0; i < cell.length; i++) {
    cell[i].classList.remove("light-blue");
    cell[i].addEventListener("click", handleClick);
  }
  for (let i = 0; i < bombs.length; i++) {
    const bombCell = document.querySelector(`.cell:nth-child(${bombs[i]})`);
    bombCell.classList.remove("rd-bg");
  }
  message.classList.add("d-hidden");
  handleSelect();
}
```
