//define variables for scope
var playerHand;
var dealerHand;
var playerSum;
var dealerSum;
var deck;

// build and shuffle deck
function buildDeck() {
     let ammount = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k',];
     let suite = ['c', 'd', 'h', 's',];
     deck = [];
     
     for (let i=0; i<suite.length; i++) {
          for (let j=0; j<ammount.length; j++) {
               deck.push(suite[i]+ "-" + ammount[j]);
          }
     }
     console.log(deck);
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
// deal 2 cards to each
     playerHand = [randomDraw(deck), randomDraw(deck)];
     dealerHand = [randomDraw(deck), randomDraw(deck)];
}

// check value of cards dealt
function checkValue(playerHand) {
     var playerSum = 0;
     for (i=0; i<playerHand.length; i++){
          playerSum = (playerSum + playerHand[i]);
     }
     return playerSum;
}

function blackjack(playerHand) {
     if (checkValue(playerHand) =21) {
          document.getElementById("bust").innerHTML = "BLACKJACK!";
     }
}

function checkValue(dealerHand) {
     var dealerSum = 0;
     for (i=0; i<dealerHand.length; i++){
          dealerSum = (dealerSum + dealerHand[i]);
     }
     return dealerSum;
}

startUp();

//check for blackjack
//conditional for blackjack here
//(stretch) if blackjack, autowin, pay 3:2 on bet, and no post-deal play
//if no blackjack, go to post deal choices:

//player post deal choice
//if hit, draw another card (and loop back to either stand or bust)
function hit() {
     playerHand.push(randomDraw(deck));
     console.log(playerHand);
     if(checkValue(playerHand) > 21){
          document.getElementById("bust").innerHTML = "BUST!";
     }
}
//if stand, no more cards

function stand() {
     console.log("Player stands at: " + checkValue(playerHand), "with " + playerHand);
}

document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("player-hand-value").innerHTML = checkValue(playerHand);
document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = checkValue(dealerHand);