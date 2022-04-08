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
     var randomIndex = Math.floor((Math.randmom * deck.length));
     return deck[randomIndex];
}

//start up the game
function startUp() {
// deal 2 cards to each
     playerHand = [(randomDraw(deck)), (randomDraw(deck))];
     dealerHand = [randomDraw(deck), randomDraw(deck)];
}

// check value of cards dealt
function checkValue() {
     var sum = 0
    for (i = 0; i = hand.length; i++){
         sum = (sum + hand[i])
    }
    return sum;
}

startUp();
console.log("Player is dealt " + playerHand);
console.log("dealer is dealt " + dealerHand);
console.log(checkValue[playerHand]);
console.log(checkValue[dealerHand]);

//check for blackjack
//conditional for blackjack here
//(stretch) if blackjack, autowin, pay 3:2 on bet, and no post-deal play
//if no blackjack, go to post deal choices:

//player post deal choice
//if stand, no more cards
//if split, create two hands and play them both
//if hit, draw another card (and loop back to either stand or another hit)
//if doubledown, double the player's bet and draw one more card, then mark as stand.
//if surrender, end hand, put cards away, and return half of the bet

//check dealer for blackjack
//conditional for blackjack here
//if blackjack, end round and clear table.
//if no blackjack go to deal cards to dealer


//deal cards to dealer

//compare the results between dealer and player

//pay out based on results