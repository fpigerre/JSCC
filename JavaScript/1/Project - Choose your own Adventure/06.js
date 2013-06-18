// Check if the user is ready to play!
confirm("I'm ready to go!")
var age = prompt("What's your age?");
if (age>!18) {
    console.log("Time to Play!");
} else {
    console.log("You can play, but we accept no reponsibility for your actions.");
}
//Line 2 to 8 check the user's age. If equal or above 18, consent given, if below 18, responsibility denied.

console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
//Line 11 is storyline 1
console.log("Batman glares at you.");
var userAnswer = prompt("Are you feeling lucky, punk?");
if (userAnswer === "yes") {
    console.log("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");
    //Batman wins battle
} else { console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
//Player wins battle
}
//End of game
var feedback = prompt("Give me a rating from 1 to 10 for my game!");
if (feedback>8) {
    console.log("This is just the beginning of my game empire. Stay tuned for more!");
} else {
    console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
    }
    //End of feedback