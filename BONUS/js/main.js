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


const gridDom = document.getElementById('containerGrid');

const playBtn = document.getElementById('btn');

const cancelDom = document.getElementById('cancel');

const squareContainerDom = document.getElementById('squareContainer');

playBtn.addEventListener('click', 
    function() {

        let difficulty = parseInt(document.getElementById('difficulty').value);

        let max;

        if (difficulty == 1) {
            max = 100;
        } else if (difficulty == 2) {
            max = 81;
        } else if (difficulty == 3) {
            max = 49;
        }

        for (let i = 1; i <= max; i++) {

            let currentElement = getSquare();

            if (difficulty == 1) {
                currentElement.classList.add('dimension-easy');
            } else if (difficulty == 2) {
                currentElement.classList.add('dimension-medium');
            } else if (difficulty == 3) {
                currentElement.classList.add('dimension-hard');
            }
        
            currentElement.append(i);
            
            currentElement.addEventListener('click', 
                function() {
                    this.classList.toggle('clicked');
                    console.log(i);
                }
            )
        
            gridDom.append(currentElement);

            squareContainerDom.classList.remove('hidden');
            squareContainerDom.classList.add('show');
        }
    }
)



cancelDom.addEventListener('click', 
    function() {
        squareContainerDom.classList.remove('show');
        squareContainerDom.classList.add('hidden');  
        gridDom.innerHTML = '';
    }
)



function getSquare() {
    const currentElement = document.createElement('div');
        
    currentElement.classList.add('square');
        
    return currentElement;
        
}      





