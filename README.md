Welcome to Browser-based Blackjack!

It's blackjack for your browser!

Brwoser-based Blackjack follows the common rules for blackjack such as those found at https://www.blackjackapprenticeship.com/how-to-play-blackjack/

//Goal of the Game
The Goal is to have your player’s card count total at or as close to “21” as possible. In the end, the participant (dealer included) with the highest “total” under 21 wins the round.


// steps taken during rounds
Step one: Players place wager

Step two: Dealer deals cards. 1 card face up, to each player, one card face down to self, another card face up to each player, one card face up to self. Players can see 2 cards of each player, and only 1 of the dealer’s cards

Step Three: players play their hands (from left to right).

Player options post deal:

stand - call it after 2 cards

split - split a pair of cards with the same values (including K &q or J& K etc)

hit - take another card

double down - take only 1 additional card, but double your bet. no further additions allowed.

surrender - folding, but allows you half your original bet back.


//outlying conditionals 
conditionals:

If a player or the dealer has a “blackjack” (a face card and an ace equating to 21 on their first two cards) the round ends immidiately.

a tie between player and dealer is a “push.” Player recieves their original bet back but with no winnings.

If all players “bust” the dealer automatically wins & vice versus.

// tech run
Browser-based blackjack functions mostly through JS javascript, with html indexing and css styling.

//wireframe
a wireframe for Browser-based blackjack can be found at:
https://www.figma.com/file/LglazChdxIpXzTVelsoY0G/Black-Jack?node-id=0%3A1

as well as in the original folder containing the files for Browser-based Blackjack.

//for users

Browser-based blackjack is pretty straightforward. Place your bets from your cashstack, play your hand, and beat the dealer to reap the rewards!

MVP's:
// core functionality of the game
Core functions of the game include:
Having a deck that accounts for all 52 cards present,

pulling from that deck to a dealer's hand and the player's hand(s)

comparing the results between the dealer and player

adding a reset or 'new round' button to restack and shuffle the deck before starting over.

(stretch) ensure that the deck takes into account the cards already dealt so we don't potentially have more than four cards of each value in the playing field at any given time.

(stretch) immplement a measure where, once the player is done, the dealer won't stop if they're still losing. (ex. if the player holds at '20' the dealer won't stop at 19, but will go for the 20/21 because they already know they'll lose otherwise)


Stretch Goals:
//
option to account ace as an '11' or a '1',

account for more than one player at the same time:

allow for virtual "bets" within the game. (give stakes to each hand)

account for the cards on the table when pulling from the deck. (don't just have a '2' pull, but have the '2 of hearts' pulled, so after that card is dealth there's only 51 more options in the index, as opposed to all 52).