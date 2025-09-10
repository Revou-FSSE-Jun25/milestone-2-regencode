let guessButton = document.getElementById("guess-button");
let inputField = document.getElementById("guess-input");
let guessResult = document.getElementById("result");
let numTries = document.getElementById("tries");

const getRandomNumber = (low, high) => {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

const submitGuess = (userInput, trueValue) => {
    if (userInput == trueValue) {
        guessResult.innerHTML = "Guess is correct!";
        return 0;
    }
    else if(userInput > trueValue) {
        guessResult.innerHTML = "Too High!";
        return 1;
    }
    else if(userInput < trueValue) {
        guessResult.innerHTML = "Too Low!";
        return 1;
    }
    else {
        guessResult.innerHTML = "Invalid";
        return 1;
    }
}

let randomNumber = getRandomNumber(0, 100);
numTries.innerHTML = 5 // 5 tries
guessButton.onclick = () => {
    let userInput = inputField.value;
    let result = submitGuess(userInput, randomNumber)
    let tries = parseInt(numTries.innerHTML) - result;

    if (tries <= 0) {
        guessResult.innerHTML = "Game over!";
        guessButton.disabled = true;
    }

    numTries.innerHTML = tries; 
};

