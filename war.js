//Deck Class
//Create a deck array that the deck can exist in, different values for the cards and their suites.
class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"
        ];
        this.suits = [
            "Hearts ♥", "Diamonds ♦", "Spades ♠", "Clubs ♣"
        ];
    }
// Iterate over suits/ranks and push all of the values to this.deck
    generateDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1  
                };
                this.deck.push(card);
                console.log(card);
            }
        }
    }
// Iterates from the last index of the array, for each index generate random index between 0 and current index
//Swap positions of the random index and current index 
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

//Class for a War Game, Create each player
class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        };
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        };
    }
// Instantiate new deck, create a deck and shuffle it
    playGame() {
        const deck = new Deck();  
        deck.generateDeck();      
        deck.shuffleDeck();
//while the deck length doesn't equal 0, continue passing out cards
        while (deck.deck.length !== 0) {
            this.player1.hand.push(deck.deck.shift());
            this.player2.hand.push(deck.deck.shift());
        }
        for (let i = 0; i < this.player1.hand.length; i++) {
            // logic to award points 
            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score++
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 1 wins a point!
                    Current score: p1: ${this.player1.score}, p2: ${this.player2.score}
                    `) 
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score++
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 2 wins a point!
                    Current score: p1: ${this.player1.score}, p2: ${this.player2.score}
                    `) 
        } else {
            console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Tie: No points awarded
                    Current score: p1: ${this.player1.score}, p2: ${this.player2.score}`)
        }
    }

    if (this.player1.score > this.player2.score) {
        console.log('Player 1 Wins!')
    } else if (this.player2.score > this.player1.score) {
        console.log('Player 2 Wins!')
    } else {
        console.log('Tie')
    }
}
}

// Create and play the game
const game = new Game();
game.playGame();

// Create and use the deck
//const deck = new Deck();
//deck.generateDeck();
//deck.shuffleDeck()