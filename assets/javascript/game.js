// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var alreadyGuessed = false;


document.getElementById("wins-span").textContent = wins;
document.getElementById("losses-span").textContent = losses;
document.getElementById("guesses-left-span").textContent = guessesLeft;
document.getElementById("guesses-span").textContent = guessesSoFar;




randLetter();


document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var userGuess = event.key.toUpperCase();
        console.log("User guess " + userGuess);
        if (userGuess === compLetter) {
            wins++
            document.getElementById("wins-span").textContent = wins;
            guessesLeft = 9;
            document.getElementById("guesses-left-span").textContent = guessesLeft;
            guessesSoFar = [];
            document.getElementById("guesses-span").textContent = guessesSoFar;
            randLetter();
        }
        else {
            if (guessesLeft > 1) {
                for (var i = 0; i < guessesSoFar.length; i++) {
                    if (guessesSoFar[i] === userGuess) {
                        alreadyGuessed = true;
                        console.log("already guessed");
                        document.getElementById("guesses-span").textContent = guessesSoFar;
                        break;
                    } else {
                        alreadyGuessed = false;
                    }
                }

                if (alreadyGuessed === false) {
                    guessesLeft--
                    document.getElementById("guesses-left-span").textContent = guessesLeft;
                    guessesSoFar.push(userGuess);
                    document.getElementById("guesses-span").textContent = guessesSoFar;
                }
            } else {
                losses++
                document.getElementById("losses-span").textContent = losses;
                guessesLeft = 9;
                document.getElementById("guesses-left-span").textContent = guessesLeft;
                guessesSoFar = [];
                document.getElementById("guesses-span").textContent = guessesSoFar;
                randLetter();
            }

        }
    }
};





// Randomly selects a letter
function randLetter() {
    compKeyCode = Math.floor(Math.random() * 26 + 65);
    compLetter = String.fromCharCode(compKeyCode);
    console.log("Computer picks " + compLetter);
};





