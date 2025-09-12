const startButton = document.getElementById("start-button");
const cards = document.getElementsByClassName("card");
const cardGrid = document.getElementById("card-grid");

const tries = document.getElementById("tries");
const completedPairs = document.getElementById("pair-completed");

const cardContent = ["😎", "😛", "🤬", "🤑", "😇", "😂", "🥶", "🤯"];
const cardContentCounter = {}


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

const memory_game = () => {
    startButton.style.display = "none";
    cardGrid.style.display = "grid";

    // assign 2 cards with content;
    cardContent.forEach(content => {
        cardContentCounter[content] = 2;
    });

    // Assign card with random content
    let possibleContent = cardContent;
    for (let card of cards) {
        // only content that hasn't been picked 2x
        possibleContent = possibleContent.filter(content => cardContentCounter[content] > 0);
        let randomContent = random_choice(possibleContent);
        card.querySelector(".card-back").textContent = randomContent;
        cardContentCounter[randomContent]--;
    }
}
let selectedCards = document.getElementsByClassName("selected");
let numSelectedCards = selectedCards.length;

startButton.onclick = () => { memory_game() };
for(let card of cards) {
    card.onclick = async () => { 
        // in case user clicks when 2 cards are selected, or card is already in correct pair
        if(numSelectedCards >= 2 || card.classList.contains("flipped")) { 
            return
        }
        card.classList.toggle("flipped");
        card.classList.toggle("selected");

        selectedCards = document.getElementsByClassName("selected");
        numSelectedCards = selectedCards.length;
        // if 2 cards are flipped, check if they have the same content
        if(numSelectedCards >= 2) {
            tries.textContent = parseInt(tries.textContent) + 1;
            if(selectedCards[0].textContent === selectedCards[1].textContent) {
                await waitSeconds(0.5);
                selectedCards[0].classList.toggle("correct");
                selectedCards[1].classList.toggle("correct");

                completedPairs.textContent = parseInt(completedPairs.textContent) + 1;
                await waitSeconds(0.5);

                selectedCards[0].classList.toggle("correct");
                selectedCards[1].classList.toggle("correct");
            }
            else {
                await waitSeconds(0.5);
                selectedCards[0].classList.toggle("wrong");
                selectedCards[1].classList.toggle("wrong");

                await waitSeconds(0.5);

                selectedCards[0].classList.toggle("wrong");
                selectedCards[1].classList.toggle("wrong");
                selectedCards[0].classList.toggle("flipped");
                selectedCards[1].classList.toggle("flipped");
            }
            selectedCards[0].classList.toggle("selected");
            selectedCards[0].classList.toggle("selected");
            numSelectedCards = selectedCards.length;
        }

    };
}


