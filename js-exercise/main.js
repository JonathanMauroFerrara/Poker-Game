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
}

randomHand();


//Royal Flush 🃁🃎🃍🃋🃊 Ten to Ace of the same suit
//handOfCards = [Ac, Qc, Jc, Kc, 10c];
/* scorri tutto l'array per semi con indice i
        scorri tutto l'array per semi con indice j
          se i == j 
          metti true
          se è true continua
            altrimenti esci
 */
function sameSeeds(args){
    console.log("entrata funzione")
    let boolean;
    console.log(args);
    for(let i = 0; i <= args.length; i++){
        console.log("entrata primo ciclo")
        for(let j = 1; j < args.length+1; j++){
            console.log("entrata secondo ciclo")
            if (args[i,1] == args[j,1]){
                console.log("prima mano" + " " + args[i,1]);
                console.log("seconda mano" + " " + args[j,1]);
               boolean = true;
            }else {
                boolean = false;
                console.log("non uguali");
                break;
            }
        }
    }
}

sameSeeds(handOfCards);



//Straight Flush 🃛🃚🃙🃘🃗 Five consecutive cards of the same suit
//traight 🃊🂩🂸🃇🃖 Five consecutive cards
//Flush 🃋🃉🃈🃄🃃 Five cards of the same suit

//Four of a Kind 🃕🃅🂵🂥🃂 Four cards of the same rank   = POKER
//Full House 🂦🂶🃆🃞🂾 Three of a Kind combined with a Pair = TRIS + PAIR
//Three of a Kind 🃝🂭🂽🂹🂢 Three cards of the same rank = TRIS
//Two Pair 🂻🂫🃓🂣🂲 Two separate pairs  =  PAIR + PAIR
//Pair 🂪🂺🂨🂷🃔 Two cards of the same rank
//High Card 🃎🃍🂧🂤🂳 No other hand applies
