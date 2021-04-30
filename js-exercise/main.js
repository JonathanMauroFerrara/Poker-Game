//Create deck for poker

let deck = [];
let handOfCards = [];
let arrayTemp= [];
const seeds = ["hearts", "squares", "flowers", "spades"];

function thirtheenCards(){
   for(let j = 0; j <= 3; j++){
        seeds[j];
        for (let i = 1; i <= 13; i++){
            deck.push([i,seeds[j]]);
        }
    }  
}

thirtheenCards();

//Create random hand function
function randomHand(){
    for(let i = 0; i <= 4; i++){
        arrayTemp = (deck[Math.floor(Math.random()*deck.length)]);
        handOfCards.push(arrayTemp);
        deck.splice(arrayTemp,1);  
    }
    console.log(handOfCards);
    console.log(deck);
}

randomHand();
