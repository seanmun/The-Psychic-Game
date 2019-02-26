var lettersGuessed = [];
var guessesLeft = 7;
var wins = 0;

//select random letter using random function
var randomLetter =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );

console.log(randomLetter);

//collect users guess as lowercase
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    userGuessList(keyPress);

}

//alert of duble guesses and then print guesses
function userGuessList (userGuess) {


    var repeatGuess = lettersGuessed.some(function(item){
        return item === userGuess;
    })

    //alert if repeated
    if (repeatGuess) {
        alert("Already guessed. Try again!");
// check if its the word
    } else {
        lettersGuessed.push(userGuess);
        console.log(lettersGuessed);

        //show user's input in browser
        printLetters();
        //is user's input a match to computer guess
        guessMatch(userGuess);
    }

}

//print letters guessed
function printLetters() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("userGuesses").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(randomLetter);

    if (character === randomLetter) {

        alert("Winner Winner!");
        wins = wins + 1;
        showWins();

    } else if (guessesLeft === 0) {
        alert("You Lose. Try agian");
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

// Show wins

// Show loses




function startGame() {
    showGuessesRemaining();
    showWins();
}



startGame();
