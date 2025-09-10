const timer = document.getElementById("timer")
const startButton = document.getElementById("start-button")
const score = document.getElementById("score");
const highScore = document.getElementById("high-score");

const clickerButton = document.getElementById("clicker-button")

const wait = (seconds) => {
    return new Promise (resolve => setTimeout(resolve, seconds*1000));
}

const count_down = async (seconds) => {
    while(seconds > 0) {
        timer.textContent = seconds;
        await wait(1);
        seconds -= 1; 
    }
}
const update_high_score = () => {
    if(parseInt(score.textContent) > parseInt(highScore.textContent)){
        highScore.textContent = score.textContent;
    }
}

startButton.onclick = async () => {
    startButton.style.display = "none";
    clickerButton.style.display = "flex";
    await count_down(10);
    startButton.style.display = "flex";
    clickerButton.style.display = "none";
    timer.textContent = "Time's up!"

    update_high_score();
    score.textContent = 0;
}

clickerButton.onclick = () => {
    score.textContent = parseInt(score.textContent) + 1;
}

