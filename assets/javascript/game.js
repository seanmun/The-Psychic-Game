
//Global variables
var lettersGuessed = [];
var guessesLeft = 7;
var wins = 0;
//select random letter using random function
var randomLetter = String.fromCharCode(Math.round(Math.random() * 26) + 97);

// show random selection in concole
console.log(randomLetter);

//collect users guess as lowercase for guesses to match
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    userGuessList(keyPress);

}

//alert of double guesses or  print guesses
function userGuessList (userGuess) {

  
        lettersGuessed.push(userGuess);
        console.log(lettersGuessed);

        //show user's guess
        printLetters();
        // set for funciton match
        guessMatch(userGuess);
    

}

//print letters guessed
function printLetters() {
    var list = lettersGuessed.join(", ");
    document.getElementById("userGuesses").innerHTML = list;
}
// use fucntion to compare guess and random letter
function guessMatch (guess) {

    console.log(guess);
    console.log(randomLetter);
        
    // check for correct guess
    if (guess === randomLetter) {
        alert("Winner Winner!");
    } 
    // if not correct the alert wrong
    else if (guessesLeft === 0) {
        alert("You Lose. Try agian");
        clear ();

    }
   
}

// Show wins

// Show loses

// Play again