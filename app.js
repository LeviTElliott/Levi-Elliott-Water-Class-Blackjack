//define variables for scope
var playerHand = 0;
var dealerHand = 0;
var hidden;
var deck;

//varriable that allows for players to add cards via hit. (Just exists so I can turn it off later to make the game stop at bust)
var canHit = true;


//start game (make sure to build and shuffle deck before starting game)
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
     while (dealerHand < 17) {
         let cardImg = document.createElement("img");
         let card = deck.pop();
         cardImg.src = "./images/" + card + ".webp";
         dealerHand += getAmount(card);
         document.getElementById("dealer-hand").append(cardImg);
     }
     // console.log(dealerHand);
     for (let i = 0; i < 2; i++) {
          //draw card to the player (can use in hit function as well)
         let cardImg = document.createElement("img");
         let card = deck.pop();
         cardImg.src = "./images/" + card + ".webp";
         playerHand += getAmount(card);
         document.getElementById("player-hand").append(cardImg);
     }
     console.log(playerHand);


     //hit and stand functions for buttons

     document.getElementById("hit").addEventListener("click", drawCard);
     document.getElementById("stand").addEventListener("click", stop);


     //draw card until over 21
     function drawCard() {
          if (playerHand > 21) {
               return;
          }
          let cardImg = document.createElement("img");
          let card = deck.pop();
          cardImg.src = "./images/" + card + ".webp";
          playerHand += getAmount(card);
          document.getElementById("player-hand").append(cardImg);
     }

     function stop() {
          //stop players drawing cards
          canHit = false
          //reveal hidden card
          document.getElementById("hidden").src = ("./images/" + hidden + ".webp");
          //display scores
          let message = ""

          if (playerHand > 21) {
               message = "You bust, dealer wins."
          } else if (dealerHand >21) {
               message = "Dealer busts, you win!"
          } else if (dealerHand == playerHand) {
               message = "draw. Try again"
          } else if (dealerHand < playerHand) {
               message = "You win! Grat job."
          } else if (dealerHand > playerHand) {
               message = "You lose, try again."
          }
          document.getElementById("dealer-sum").innerText = dealerHand;
          document.getElementById("player-sum").innerText = playerHand;
          document.getElementById("gameOver").innerText = message;
     }
//found this split technique to work with the label from the image at https://www.youtube.com/watch?v=bMYCWccL-3U (it's a bit cheesy but I like it) (originally had different image names but couldn't get the split right)
function getAmount(card) {
     let data = card.split("-");
     let value = data[0];
 
     if (isNaN(value)) {
         if (value == "A") {
             return 11;
         }
         return 10;
     }
     return parseInt(value); //careful to get values correct. If it reads as "c-2" instead of "2-c" it will keep giving out 20 as value
}
}