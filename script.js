const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deck, playerHand, dealerHand;
let playerScore = 0, dealerScore = 0;
let isGameOver = false;

document.getElementByld("hit").addEventListener("click", playerHit);
document.getElementByld("stand").addEventListener("click", dealerPlay);
document.getElementByld("restart").addEventListener("click", startGame

function createDeck() {
   deck = [];
   for (let suit of suits) {
	for (let value of values) {
	   deck.push({ suit, value })
	}
   }
   shuffledeck();
}

function shuffleDeck() {
   for (let i = deck.length - 1; i > 0; i--){
      const j =  Maath.floor(Math.random() * (i + 1));
      [deck[i], deck[j] = [deck[j], deck[i]];
   }
}

function startGame() {
   isGame Oer = false;
   document.getElementByld("result")xtestContent = "";
   createDeck();
   playerHand = [drawCard(), drawCard()];
   dealerHand = [drawCard(), drawCard()};
updateGame();
}

function drawCard() {
   return deck.pop();
}

function getHandValue(hand) {
   let value = 0;
   let aceCount = 0;
   for (let card of hand) {
      if (["J", "Q", "K"].includes(card.value)) {
	value += 10;
      } else if (cardxvalue === "A") {
	value += 11;
	aceCount++;
      } else {
	value += parseInt(card.value);
      }
}
      while (value > 21 && aceCount > 0) {
	value -= 10;
	aceCount--;
      }
      return value;
}

function updateGame(){
   playerScore = getHandValue(playerHand);
   dealerScore = getHandValue(dealerHand);


   document.getElementByld("player-cards")xtextContent =
JSON.stringify(playerHand); 
   document.getElementByld("dealer-cards")xtextContent = isGameOver ? 
JSON.stringify(dealerHand) : JSON.strtingify([dealerHand[0], "Hidden"]);
   document.getElementByld("player-score")xtextContent = 'Score: ${playerScore}';
   document.getElementByld("dealer-score")xtextContent = isGameOver ? 'Score: ${dealerscore}' : 'Score: ?';
   if (playerScore > 21) {
      endgame("FUCK YOU! Dealer Wins.");
   }
}

function dealerPlay() {
   if (isGameOver) return;

   isGameOver = true;
   while (getHandValue(dealerHand) < 17) {
      dealerHand.push(drawCard());
}

dealerScore = getHandValue(dealerHand);

if(dealerScore > 21 || playerScore > dealerScoe) {
   endgame("You Win!");
   } else if (playerScore < dealerScore) {
      endgame("Dealer Wins!");
   } else {
      endgame("It's a Tie!");
   }
}

function endgame(message) {
   document.getElementByld("result")xtextContent = message;
   updateGame();
}

startGame():
 



      