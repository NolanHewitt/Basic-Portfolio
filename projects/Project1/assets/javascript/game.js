
    //Variable for guesses, wins, and losses.
let guesses = 5;
let wins = 0;
let losses = 0;
let allchoices = "";
//Array of possible computer choices and random choice for game.
let computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
//User input controls
// This function is run whenever the user presses a key.
 document.onkeyup = function(event) {
// Determines which key was pressed.
    let userGuess = event.key.toLowerCase();
    console.log(userGuess);

//Chooses a new letter for the computer every time the player inputs a key

//Win Conditions
    if (userGuess === computerGuess) {
        wins++;
        guesses=6;
        document.getElementById("win").innerHTML = "Wins: " + wins;
        allchoices = "";
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
    }

//Write the letter that was guessed if it's incorrect
    else {
        guesses--;
        document.getElementById("guesses").innerHTML ="Guesses Left: " + guesses;
        document.getElementById("guess1").innerHTML = "Guess: " + allchoices;
        allchoices = allchoices+userGuess+", ";
    }

    //Lose Condition
    if (guesses === 0) {
        guesses=6;
        losses++;
        document.getElementById("lose").innerHTML = "Losses: " + losses;
        allchoices = "";
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
    }
}