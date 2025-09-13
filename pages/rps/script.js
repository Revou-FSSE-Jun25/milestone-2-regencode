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
    let playerWin = "draw"; // "draw" if draw, else True/False if win/lose
    playerChoice.innerHTML = i_to_s[user_current_move];
    computerChoice.innerHTML = i_to_s[computer_current_move];
    

    switch (i_to_s[user_current_move]) {
        case "rock":
            switch(i_to_s[computer_current_move]) {
                case "rock":
                    playerWin = "draw";
                    break;
                case "paper":
                    playerWin = false;
                    break;
                case "scissors":
                    playerWin = true;
                    break;
            }
            break;
        case "paper":
            switch(i_to_s[computer_current_move]) {
                case "rock":
                    playerWin = true;
                    break;
                case "paper":
                    playerWin = "draw";
                    break;
                case "scissors":
                    playerWin = false;
                    break;
            }
            break;
        case "scissors":
            switch(i_to_s[computer_current_move]) {
                case "rock":
                    playerWin = false;
                    break;
                case "paper":
                    playerWin = true;
                    break;
                case "scissors":
                    playerWin = "draw";
                    break;
            }
            break;
    }
        
    if(playerWin === "draw") {
        resultBoard.innerText = "Draw!";
    }
    else if(playerWin === true) {
        resultBoard.innerText = "You Win! :)))";
        scoreBoard.innerText = parseInt(scoreBoard.innerText) + 1;
    }
    else {
        resultBoard.innerText = "You Lose! :(";
        scoreBoard.innerText = parseInt(scoreBoard.innerText) - 1;
    }
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.onclick = () => rps_game(0);
paper.onclick =  () => rps_game(1);
scissors.onclick = () => rps_game(2);

