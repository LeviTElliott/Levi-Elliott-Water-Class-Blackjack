// shuffle deck
var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,]

function randomDraw() {
     Math.floor((math.randmom * deck.length))
}
function startUp() {
// deal 2 cards face up to players
var playHand = (randomDraw(deck), randomDraw(deck));
// deal 1 face up and 1 face down to dealer
var dealerHand = (randomDraw(deck), randomDraw(deck));
}
// check value of cards
function checkValue() {
    
}
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