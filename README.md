## ESERCIZIO

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
****
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


### SOLUZIONE

**Logica del Programma**

- fare funzione che genera numeri casuali in un range da min a max;
- fare funzione che genera n numeri casuali tutti diversi nel range da min a max e li pusha in un array chiamato "bombs"
- creare una funzione che gestisca il click sulle celle:
    - se l'utente becca una bomba la cella si colora di rosso e l'utente perde
    - altrimenti la cella si colora di blu e l'utente continua a giocare
- creare una funzione per gestire l'esito della partita 
    - quando l'utente clicca su una bomba
    - quando l'utente o clicca sulle caselle senza bomba per un numero di numeroTotaleCaselle - NumeroBombe