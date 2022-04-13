//define variables for scope
var playerHand = 0;
var dealerHand = 0;
var hidden;
var deck;
var card;

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
          //swap index positions (i & j) to randomize deck
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
     while (dealerHand < 17 || dealerHand < playerHand) {
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
     // console.log(playerHand);


     //hit and stand functions for buttons

     document.getElementById("hit").addEventListener("click", drawCard);
     document.getElementById("stand").addEventListener("click", stop);
     document.getElementById("reset").addEventListener("click", resetForm);


     //draw card until over 21
     function drawCard() {
          if (playerHand > 21) {
               canHit = false;
               return message ="Bust. Dealer wins, try again.";
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

          if (playerHand == 21) {
               message = "Blackjack! You Win!"
          } else if (playerHand >21) {
               message = "Bust. Dealer wins."
          } else if (dealerHand == playerHand) {
               message = "draw. Try again"
          } else if (dealerHand > 21) {
               message = "Dealer busts! You win!"
          } else if (dealerHand < playerHand) {
               message = "You win! Grat job."
          } else if (dealerHand > playerHand) {
               message = "You lose, try again."
          }
          document.getElementById("dealer-sum").innerText = dealerHand;
          document.getElementById("player-sum").innerText = playerHand;
          document.getElementById("gameOver").innerText = message;
     }

     function resetForm() {
          location.reload();
     }
function getAmount(card) {
     let data = card.split("-");
     let value = data[0];
 //value of face cards a =11 everything else = 10
     if (isNaN(value)) {
         if (value == "A") {
             return 11;
         }
         return 10;
     }
     return parseInt(value); //careful to get values correct. If it reads as "c-2" instead of "2-c" it will keep giving out 10 as value
}
}

