// Esercizio di oggi: Griglia Campo Minato
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const playBtn = document.getElementById('btn');

playBtn.addEventListener('click', startGame);



function startGame() {

    let difficulty = document.getElementById('difficulty').value;

    let maxCell;

    let cellRow;

    if (difficulty == 1) {
        maxCell = 100;
    } else if (difficulty == 2) {
        maxCell = 81;
    } else if (difficulty == 3) {
        maxCell = 49;
    }

    cellRow = Math.sqrt(maxCell);

    playground();

    function playground() {

        const gridDom = document.getElementById('containerGrid');

        gridDom.innerHTML = '';

        for (let i = 1; i <= maxCell; i++) {

            let currentElement = getSquare(i, cellRow);
    
            currentElement.addEventListener('click',
                function () {
                    this.classList.toggle('clicked');
                    console.log(i);
                }
            )
    
            gridDom.append(currentElement);
    
        }
    }

    function getSquare(number, cellRow) {

        const currentElement = document.createElement('div');
        currentElement.style.height = `calc(100% / ${cellRow})`;
        currentElement.style.width = `calc(100% / ${cellRow})`;
        currentElement.append(number);
        currentElement.classList.add('square');

        return currentElement;

    }

}