Welcome to Browser-based Blackjack!

It's blackjack for your browser!

Brwoser-based Blackjack follows the common rules for blackjack such as those found at https://www.blackjackapprenticeship.com/how-to-play-blackjack/

Broser-based Blackjack can be found at:
https://levitelliott.github.io/Levi-Elliott-Water-Class-Blackjack/


//Goal of the Game
The Goal is to have your player’s card count total at or as close to “21” as possible. In the end, the participant (dealer included) with the highest “total” under 21 wins the round.


// steps taken during rounds
Step one: Players place wager (stretch)

Step two: Dealer deals cards. 1 card face up, to each player, one card face down to self, another card face up to each player, one card face up to self. Players can see 2 cards of each player, and all but 1 of the dealer’s cards

Step Three: players play their hands (from left to right).

Player options post deal:

stand - Player holds at their current card value and hands their turn over to the dealer
(when you're satisfied with your hand, call stand)
hit - take another card


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

Screenshots for end game results may be found in the screenshots folder.

MVP's:
// core functionality of the game
Core functions of the game include:
Having a deck that accounts for all 52 cards present,

randomize cards that are pulled from deck

pulling from that deck to a dealer's hand and the player's hand(s)

sum of two cards per hand

comparing the results between the dealer and player

allow for post -deal options (stand, hit, etc...)

adding a reset or 'new round' button to restack and shuffle the deck before starting over.


Stretch Goals:
//
option to account ace as an '11' or a '1',

account for more than one player at the same time:

allow for virtual "bets" within the game. (give stakes to each hand)

account for the cards on the table when pulling from the deck. (don't just have a '2' pull, but have the '2 of hearts' pulled, so after that card is dealth there's only 51 more options in the index, as opposed to all 52).

(stretch) ensure that the deck takes into account the cards already dealt so we don't potentially have more than four cards of each value in the playing field at any given time.

(stretch) immplement a measure where, once the player is done, the dealer won't stop if they're still losing. (ex. if the player holds at '20' the dealer won't stop at 19, but will go for the 20/21 because they already know they'll lose otherwise)

//citations
// cite https://w3collective.com/random-playing-card-javascript/ for help with card deck

//found this split technique to work with the label from the image at https://www.youtube.com/watch?v=bMYCWccL-3U (it's a bit cheesy but I like it) (originally had different image names but couldn't get the split the values correctly)