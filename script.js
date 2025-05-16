let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector(".result");
const win = document.querySelector(".win");
const score = document.querySelector(".score");
score.textContent = "Your score: 0\tComputer score: 0";

rockBtn.addEventListener("click", (e) => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", (e) => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", (e) => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("choice: ");
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceLower = String.prototype.toLowerCase(humanChoice);
    if (humanChoiceLower == "paper") {
        if (computerChoice == "paper") {
            result.textContent = "Tie!";
        }
        else if (computerChoice == "rock") {
            result.textContent = "You win!";
            humanScore++;
        }
        else {
            result.textContent = "You lost!";
            computerScore++;
        }
    }
    else if (humanChoiceLower == "rock") {
        if (computerChoice == "rock") {
            result.textContent = "Tie!";
        }
        else if (computerChoice == "scissors") {
            result.textContent = "You win!";
            humanScore++;
        }
        else {
            result.textContent = "You lost!";
            computerScore++;
        }
    }
    else {
        if (computerChoice == "scissors") {
            result.textContent = "Tie!";
        }
        else if (computerChoice == "paper") {
            result.textContent = "You win!";
            humanScore++;
        }
        else {
            result.textContent = "You lost!";
            computerScore++;
        }
    }
    score.textContent = `Your score: ${humanScore}\tComputer score: ${computerScore}`;
    if (humanScore >= 5 || computerScore >= 5) {
        humanScore > computerScore ? win.textContent = "You win the game!" : win.textContent = "You lost the game!";
    }
}

