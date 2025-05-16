let humanScore = 0;
let computerScore = 0;

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
            console.log("Tie!");
        }
        else if (computerChoice == "rock") {
            console.log("You win!");
            humanScore++;
        }
        else {
            console.log("You lost!");
            computerScore++;
        }
    }
    else if (humanChoiceLower == "rock") {
        if (computerChoice == "rock") {
            console.log("Tie!");
        }
        else if (computerChoice == "scissors") {
            console.log("You win!");
            humanScore++;
        }
        else {
            console.log("You lost!");
            computerScore++;
        }
    }
    else {
        if (computerChoice == "scissors") {
            console.log("Tie!");
        }
        else if (computerChoice == "paper") {
            console.log("You win!");
            humanScore++;
        }
        else {
            console.log("You lost!");
            computerScore++;
        }
    }
}

