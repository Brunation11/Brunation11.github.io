 // Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description:
// Overall mission: get a score closest to 21
// Goals: get as close to 21 without going over, get a higher score than the dealer
// Characters: user, dealer
// Objects: cards, hand
// Functions: deal cards, dealer hand, players hand

// Pseudocode
/*
1 - Create a card object with properties for card number and suit of card.
2 - Add a method to generate a random number and suit
3 - Card object should be able to return a randomly generated number and suit stored in the number and suit properties.
4 - Create a draw object that contains the cards drawn.
5 - Add a total score method to the draw object that returns the total score
6 - Add method to print cards drawn to console
7 - Write function for drawing new cards
8 - Write function to check if the total score method is a bust or a win
9 - Write method to check if draw object for user is greater than draw object for dealer
*/

// Initial Code
/*

// Card Constructor to represent a card object

function Card(s, n) {
    this.suit = s;
    this.number = n;

// getters to retrieve suit, number, and rspective value

    this.getSuit = function() {
        return suit;
    };

    this.getNumber = function() {
        return number;
    };

    this.getValue = function() {
        if (number === 1) {
            return 11;
        } else if (number > 10) {
            return 10;
        } else {
            return number;
        }
    };
}

// generate random number and suit

var deal = function() {
    var randNumber = Math.floor(Math.random() * 13) + 1;
    var randSuit = Math.floor(Math.random() * 4) + 1;
    return new Card(randSuit,randNumber);
};

// stores the cards drawn and provides methods to return score, and cards drawn.

function draw() {
    var cardsInHand = [];
    cardsInHand.push(deal());
    cardsInHand.push(deal());

    this.getHand = function() {
        return cardsInHand;
    };

//  returns the score by adding each card object's value

    this.score = function() {
        var score = 0;
        for (var idx = 0; idx < cardsInHand.length; idx++) {
            if (cardsInHand[idx].getValue() === 1 && score < 10) {
                score += 11;
            } else if (cardsInHand[idx].getValue() === 1 && score > 10) {
                score += 1;
            } else {
                score += cardsInHand[idx].getValue();
            }
        }
        return score;
    };

// prints out current cards and respective suits

    this.printHand = function() {
        var suit = "";
        var faceCard = "";
        var string = "";

        for(var idx = 0; idx < cardsInHand.length; idx++) {
            if (cardsInHand[idx].getNumber() === 11) {
                faceCard = "Jack";
            } else if (cardsInHand[idx].getNumber() === 12) {
                faceCard = "Queen";
            } else if (cardsInHand[idx].getNumber() === 13) {
                faceCard = "King";
            } else if (cardsInHand[idx].getNumber() === 1) {
                faceCard = "Ace";
            } else {
                faceCard = cardsInHand[idx].getNumber();
            }

            if (cardsInHand[idx].getSuit() === 1) {
                suit = "Diamonds";
            } else if (cardsInHand[idx].getSuit() === 2) {
                suit = "Clubs";
            } else if (cardsInHand[idx].getSuit() === 3) {
                suit = "Hearts";
            } else {
                suit = "Spades";
            }

            string += faceCard + " of " + suit + " ";
        }
        return string;
    };

// method for drawing a new card and storing it in object

        this.hitMe = function() {
        cardsInHand.push(deal());
    };
}


*/
// Refactored Code

// Card Constructor to represent a card object

function Card(s, n) {
    var suit = s;
    var number = n;

// getters to retrieve suit, number, and rspective value

    this.getSuit = function() {
        return suit;
    };

    this.getNumber = function() {
        return number;
    };

    this.getValue = function() {
        if (number === 1) {
            return 11;
        } else if (number > 10) {
            return 10;
        } else {
            return number;
        }
    };
}

// generate random number and suit

var deal = function() {
    var randNumber = Math.floor(Math.random() * 13) + 1;
    var randSuit = Math.floor(Math.random() * 4) + 1;
    return new Card(randSuit,randNumber);
};

// stores the cards drawn and provides methods to return score, and cards drawn as well as draw new cards

function Hand() {
    var cardsInHand = [];
    cardsInHand.push(deal());
    cardsInHand.push(deal());

    this.getHand = function() {
        return cardsInHand;
    };

//  returns the score by adding each card object's value

    this.score = function() {
        var score = 0;
        for (var idx = 0; idx < cardsInHand.length; idx++) {
            if (cardsInHand[idx].getValue() === 1 && score < 10) {
                score += 11;
            } else if (cardsInHand[idx].getValue() === 1 && score > 10) {
                score += 1;
            } else {
                score += cardsInHand[idx].getValue();
            }
        }
        return score;
    };

// prints out current cards and respective suits

    this.printHand = function() {
        var suit = "";
        var faceCard = "";
        var string = "";

        for(var idx = 0; idx < cardsInHand.length; idx++) {
            if (cardsInHand[idx].getNumber() === 11) {
                faceCard = "Jack";
            } else if (cardsInHand[idx].getNumber() === 12) {
                faceCard = "Queen";
            } else if (cardsInHand[idx].getNumber() === 13) {
                faceCard = "King";
            } else if (cardsInHand[idx].getNumber() === 1) {
                faceCard = "Ace";
            } else {
                faceCard = cardsInHand[idx].getNumber();
            }

            if (cardsInHand[idx].getSuit() === 1) {
                suit = "Diamonds";
            } else if (cardsInHand[idx].getSuit() === 2) {
                suit = "Clubs";
            } else if (cardsInHand[idx].getSuit() === 3) {
                suit = "Hearts";
            } else {
                suit = "Spades";
            }

            string += faceCard + " of " + suit + " ";
        }
        return string;
    };

// method for drawing a new card and storing it in object

        this.hitMe = function() {
        cardsInHand.push(deal());
    };
}

// function to generate a dealer hand

var playAsDealer = function() {
    var dealerHand = new Hand();
    while (dealerHand.score() < 17) {
        dealerHand.hitMe();
    }
    return dealerHand;
};

// function to generate a players hand

var playAsUser = function() {
    var userHand = new Hand();
    var decision = confirm("Current hand " + userHand.printHand() + " Current score: " + userHand.score() + " Click OK to \"HIT\" or Cancel to \"HOLD\"");
    while(decision) {
        userHand.hitMe();
        decision = confirm("Current hand " + userHand.printHand() + " Current score: " + userHand.score() + " Click OK to \"HIT\" or Cancel to \"HOLD\"");
    }
    return userHand;
};

// function that compares the players and the dealers hand to declare a winner

var declareWinner = function(userHand, dealerHand) {
    if (userHand.score() <= 21) {
        if (userHand.score() > dealerHand.score()) {
            return "You win!";
        } else if (dealerHand.score() > 21) {
            return "You win!";
        } else if (userHand.score() === dealerHand.score()) {
            return "You tied!";
        } else {
            return "You lose!";
        }
    } else if (dealerHand.score > 21) {
        return "You tied!";
    } else {
        return "You lose!";
    }
};

// initiates a game by calling the user, dealer and declare winner functions

var playGame = function() {
    var userHand = playAsUser();
    var dealerHand = playAsDealer();
    var winMessage = declareWinner(userHand, dealerHand);

    document.getElementById("dealer").innerHTML = ("Dealer has " + dealerHand.printHand());
    document.getElementById("dealerscore").innerHTML = ("current score: " + dealerHand.score());
    document.getElementById("user").innerHTML = ("You have " + userHand.printHand());
    document.getElementById("userscore").innerHTML = ("current score: " + userHand.score());
    document.getElementById("winner").innerHTML = (winMessage);
};


// Reflection
/*
What was the most difficult part of this challenge?

The most difficult part of this challenge is was not knowing how to impliment the logic. Everytime I reached a point where I felt stuck I kept thinking of how I would do it with Ruby code and then how I could translate that to what I know in JavaScript.


What did you learn about creating objects and functions that interact with one another?

The entire process involved a lot of guess and check. I would had one small bit of code and check the functionality to see if the changes were what I expected. It was a great learning experience to see first hand how each object, variable, function, and method interacted.

Did you learn about any new built-in methods you could use in your refactored solution? If so, what were they and how do they work?

I still dont think I took advantage of a lot of the built in methods. The ones I did use however included some of the Math methods such as #floor and #random.

How can you access and manipulate properties of objects?

You can access and manipulate properties objects by calling them and setting them to a new value. If properties or methods are defined with var within an object or method than they are only avaiable within the object or method and can not be called or altered from outside of it.
*/