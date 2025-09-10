let scoreBoard = document.getElementById("score");
let playerChoice = document.getElementById("player-choice")
let computerChoice = document.getElementById("computer-choice")
let resultBoard = document.getElementById("result");

const i_to_s = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

const getRandomNumber = (low, high) => {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

const rps_game = (user_current_move) => {
    let computer_current_move = getRandomNumber(0, 2);
    let playerWin = "draw";
    playerChoice.innerHTML = i_to_s[user_current_move];
    computerChoice.innerHTML = i_to_s[computer_current_move];

    if(user_current_move == computer_current_move) {
        resultBoard.innerText = "Draw!";
    }
    else {
        if(user_current_move == 2){
            if(computer_current_move == 0) {
                playerWin = false;
            }
            else playerWin = true;
        }
        else if(computer_current_move == 2) {
            if(user_current_move == 0) {
                playerWin = true;
            }
            else playerWin = false;
        }
        else {
            if(user_current_move > computer_current_move) {
                playerWin = true;
            }
            else playerWin = false;
        }

        if(playerWin) {
            resultBoard.innerText = "You Win! :)))";
            scoreBoard.innerText = parseInt(scoreBoard.innerText) + 1;
        }
        else {
            resultBoard.innerText = "You Lose! :(";
            scoreBoard.innerText = parseInt(scoreBoard.innerText) - 1;
        }
    }
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.onclick = () => rps_game(0);
paper.onclick =  () => rps_game(1);
scissors.onclick = () => rps_game(2);

