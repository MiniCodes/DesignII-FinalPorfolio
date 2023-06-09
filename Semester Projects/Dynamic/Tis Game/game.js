// sets random number to 0
var randomNum = 0

// sets the user's number of guesses to 0
var numofGuess = 0

/* function to choose & store a random number */
function chooseRandoNum(min, max) {
    // sets random number to chosen random number
    randomNum = Math.floor(Math.random() * 
    (max + 1) ) + min;

    // converts random number to an integer
    randomNum = parseInt(randomNum)


    /* resets the user's number of guesses to zero */
    numofGuess = 0


    // clears previous game's messages
    document.getElementById('checkResults').innerHTML = '';

    /* clears previous game's number of guesses 
    message */
    document.getElementById('guessResults').innerHTML = '';

    // Used to see Random Number for testing
    /* document.getElementById("randoResults").innerHTML = 
    randomNum; */
}

/* Function checks user's number to see
if it matches the random number chosen */
function checkRandoNum() {
    // sets the value of guessNum to user's inputted Number
    let guessNum = document.getElementById("guessNumInput").value
    
    // converts guess to an integer
    guessNum = parseInt(guessNum)

    if (guessNum < randomNum) {
        /* adds 1 to the number of guesses made by
        the user */
        numofGuess = numofGuess + 1

        // message for when guess is too low
        document.getElementById("checkResults").innerHTML = 
        "Sorry, this isn't the number." + "<br>" +
        "Try doing a higher number :3";
    } if (guessNum > randomNum) {
        /* adds 1 to the number of guesses made by 
        the user */
        numofGuess = numofGuess + 1

        // message for when guess is too high
        document.getElementById("checkResults").innerHTML = 
        "Sadly this isn't the number." + "<br>" +
        "Try a lower number :3";
    } if (guessNum == randomNum) {
        // message when guess is correct
        document.getElementById("checkResults").innerHTML = 
        "You did it! You guessed the correct number!" + 
        "<br>" + "Choose another random number to play again";

        /* message for how many guesses a user made to 
        guess the correct number */
        document.getElementById('guessResults').innerHTML = 
        "It took you " + numofGuess + " guesses :3";
    }
}