//define variables for scope
var playerHand = 0;
var dealerHand = 0;
var hidden;
var deck;

//varriable that allows for players to add cards via hit. (Just exists so I can turn it off later to make the game stop at bust)
var canHit = true;


//start game 
buildDeck();
shuffleDeck();
startUp();

// build and shuffle deck
function buildDeck() {
     let amount = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
     let suite = ["C", "D", "H", "S"];
     deck = [];
     
     for (let i=0; i<suite.length; i++) {
          for (let j=0; j<amount.length; j++) {
               deck.push(amount[j] + "-" + suite[i]);
          }
     }
     // console.log(deck);
}

function shuffleDeck() {
     for (let i=0; i < deck.length; i++) {
          let j = Math.floor(Math.random() * deck.length);
          let temp = deck[i];
          deck[i] = deck[j];
          deck[j] = temp;
     }
     //should be random now
     // console.log(deck);
}

//start up the game
function startUp() {
     hidden = deck.pop();
     dealerHand += getAmount(hidden);
     // console.log(hidden);
     // console.log(dealerSum);
     while (dealerHand < 17) {
         //<img src="./cards/4-C.png">
         let cardImg = document.createElement("img");
         let card = deck.pop();
         cardImg.src = "./images/" + card + ".webp";
         dealerHand += getAmount(card);
         document.getElementById("dealer-hand").append(cardImg);
     }
     console.log(dealerHand);

//found this split technique to work with the label from the image at https://www.youtube.com/watch?v=bMYCWccL-3U (it's a bit cheesy but I like it)
function getAmount(card) {
     let data = card.split("-");
     let value = data[0];
 
     if (isNaN(value)) {
         if (value == "A") {
             return 11;
         }
         return 10;
     }
     return parseInt(value);
}}