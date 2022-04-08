//define variables for scope
var playerHand;
var dealerHand;
var playerSum;
var dealerSum;
var hidden;
var deck;

//varriable that allows for players to add cards via hit. (Just exists so I can turn it off later to make the game stop at bust)
var canHit = true;


//start game 
startUp();
buildDeck();
shuffleDeck();
// build and shuffle deck
function buildDeck() {
     let amount = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k',];
     let suite = ['c', 'd', 'h', 's',];
     deck = [];
     
     for (let i=0; i<suite.length; i++) {
          for (let j=0; j<amount.length; j++) {
               deck.push(suite[i]+ "-" + amount[j]);
          }
     }
}

function shuffleDeck() {
     for (let i=0; i < deck.length; i++) {
          let j = Math.floor(Math.random() * deck.length);
          let temp= deck[i];
          deck[i] = deck[j];
          deck[j] = temp;
     }
}
//draw random cards

//start up the game
function startUp() {
     hidden = deck.pop();
     dealerSum += getAmount(hidden);
     // console.log(hidden);
     // console.log(dealerSum);
     while (dealerSum < 17) {
          let cardImg = document.createElement("img");
          let card = deck.pop();
          //this is the line that works with the split technique in line 54
          cardImg.src ="./images/" + card +".webp";
          dealerSum += getAmount(card);
          document.getElementById("dealer-hand").append(cardImg);
     }
     console.log(dealerSum);
}

//found this split technique to work with the label from the image at https://www.youtube.com/watch?v=bMYCWccL-3U (it's a bit cheesy but I like it)
function getAmount(card) {
     let data = card.split("-");
     let amount = data[0]

     //don't forget to set value for ace different from rest of face cards
     if (isNaN(amount)) {
          if (amount =='a') {
               return 11;
          }
          return 10;
     }

     return parseInt(amount);
}