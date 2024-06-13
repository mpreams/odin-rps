const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let choice = choices[n];
    return choice;
}

function getHumanChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors");
    if (choice.startsWith("r") || choice.startsWith("R")) {
        choice = choices[0];
    } else if (choice.startsWith("p") || choice.startsWith("P")) {
        choice = choices[1];
    } else if (choice.startsWith("s") || choice.startsWith("S")) {
        choice = choices[2];
    } else {
        choice = null;
    }
    return choice;
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        ++computerScore;
        console.log("You lose. Paper beats rock");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        ++humanScore;
        console.log("You win. Rock beats scissors");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        ++computerScore;
        console.log("You lose. Rock beats paper");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        ++humanScore;
        console.log("You win. Paper beats scissors");
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        ++computerScore;
        console.log("You lose. Rock beats scissors");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        ++humanScore;
        console.log("You win. Scissors beats paper");
    } else {
        console.log("Tie")
    }
}

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

// function playGame() {
//     for (i=0; i < 5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log(humanScore, computerScore)
//     }
// }

// playGame();