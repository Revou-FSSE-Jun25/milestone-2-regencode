const startButton = document.getElementById("start-button");
const gameBlocks = document.getElementsByClassName("game-block");
const gameGrid = document.getElementById("game-grid");

const waitSeconds = (seconds) => {
    return new Promise (resolve => setTimeout(resolve, seconds*1000));
}

const count_up = async () => {
    while(seconds > 0) {
        timer.textContent = 0;
        await waitSeconds(1);
        seconds += 1; 
    }
}

const random_choice = (arr) => {
    let max = arr.length;
    let idx = Math.floor(Math.random() * max);
    return arr[idx];
}

class FallingObjectsGame {
    constructor() {
        this.
    }

    const game_loop = () => {
        
    
    }

    const handle_player_input = () => {

    }
}


