const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let choice = choices[n];
    return choice;
}

// function getHumanChoice() {
//     let choice = window.prompt("Rock, Paper, or Scissors");
//     if (choice.startsWith("r") || choice.startsWith("R")) {
//         choice = choices[0];
//     } else if (choice.startsWith("p") || choice.startsWith("P")) {
//         choice = choices[1];
//     } else if (choice.startsWith("s") || choice.startsWith("S")) {
//         choice = choices[2];
//     } else {
//         choice = null;
//     }
//     return choice;
// }

let computerScore = 0;
let humanScore = 0;
const body = document.querySelector('#container');

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        ++computerScore;
        result.textContent = "You lose. Paper beats rock";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        ++humanScore;
        result.textContent = "You win. Rock beats scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        ++computerScore;
        result.textContent = "You lose. Rock beats paper";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        ++humanScore;
        result.textContent = "You win. Paper beats scissors";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        ++computerScore;
        result.textContent = "You lose. Rock beats scissors";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        ++humanScore;
        result.textContent = "You win. Scissors beats paper";
    } else {
        result.textContent = "Tie";
    }
    scores.textContent = `You: ${humanScore} Computer: ${computerScore}`;
}

let results = document.createElement("div");
let scores = document.createElement("p");
results.setAttribute("class", "results");
results.appendChild(scores);
let result = document.createElement("span");
result.textContent = '';
results.appendChild(result);

body.addEventListener('click', (e) => {
    let computerSelection = getComputerChoice();

    switch(e.target.id) {
        case 'rock':
            playRound(choices[0], computerSelection);
            break;

        case 'paper':
            playRound(choices[1], computerSelection);
            break;

        case 'scissors':
            playRound(choices[2], computerSelection);
            break;
    }

    if (humanScore >= 5 || computerScore >= 5) {
        result.textContent = "Game Over";
        results.appendChild(result);
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => body.removeChild(button));
    }

    body.appendChild(results);
});

// function playGame() {
//     for (i=0; i < 5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log(humanScore, computerScore)
//     }
// }

// playGame();