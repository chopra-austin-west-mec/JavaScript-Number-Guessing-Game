function game() {
    alert("welcome to my random number guessing game");
    var gameOver = false;
    var numToGuess = Math.floor(Math.random() * 100);
    var guesses = 0;
    console.log(numToGuess);
    
    
    while (gameOver == false) {
        console.log(numToGuess)
        var guess = prompt("Guess a number between 1 and 100");
        
        if (guess == numToGuess) {
            guesses = guesses + 1;
            alert("your Guess was correct");
            gameOver = true;
            
        }
        else if (guess > numToGuess) {
            guesses = guesses + 1
            alert("guess was to high, you are at " + guesses + " guesses" );
            
        }
        else if (guess < numToGuess) {
            guesses = guesses + 1
            alert("guess was to low, you are at " + guesses + " guesses" );
            
        }
        else if (guess == "stop") {
            gameOver = true;
        }
        
    }
    
}
game()