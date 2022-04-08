// shuffle deck
var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,]

//define variables for scope
var playerHand;
var dealerHand;

//draw random cards
function randomDraw(deck) {
     var randomCards = Math.floor((deck.length * Math.random()));
     return deck[randomCards];
}

//start up the game
function startUp() {
// deal 2 cards to each
     playerHand = [randomDraw(deck), randomDraw(deck)];
     dealerHand = [randomDraw(deck), randomDraw(deck)];
}

// check value of cards dealt
function checkValue(playerHand) {
     var sum = playerHand[0] + playerHand[1];
     return sum;
}

function checkValue(dealerHand) {
     var sum = dealerHand[0] + dealerHand[1];
     return sum;
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
     console.log("Player's new hand is: " + playerHand);
     if(checkValue(playerHand) >21){
          console.log("BUST!");
     }
}
//if stand, no more cards

function stand() {
     console.log("Player stands at: " + checkValue(playerHand), "with " + playerHand);
}
//if split, create two hands and play them both
//if doubledown, double the player's bet and draw one more card, then mark as stand.
//if surrender, end hand, put cards away, and return half of the bet

//check dealer for blackjack
//conditional for blackjack here
//if blackjack, end round and clear table.
//if no blackjack go to deal cards to dealer


//deal cards to dealer

//compare the results between dealer and player

//pay out based on results

document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("player-hand-value").innerHTML = checkValue(playerHand);
document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = checkValue(dealerHand);