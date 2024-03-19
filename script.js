"use strict"

//create variables for: rock, paper,scissors

//variables 
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let draw = 0;

// const computerSelection = 'rock';
//Create a function using an array to capture the computers choice.
function getComputerChoice() {
    /*create a varirable to store the computers choice.
    Uses Math.floor to round the number and Math.random to choose an option
    */
    const computerChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
    console.log(`Computers choice is -> ${computerChoice}`);
    return computerChoice;
}

function playRound(computerSelection) {
    const playerSelectionNormal = prompt("So what will it be?? Rock, Paper, or Scissors")
    const playerSelection =
        playerSelectionNormal.charAt(0).toUpperCase() +
        playerSelectionNormal.slice(1).toLowerCase();

    if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        return alert(`The Player Won ${playerSelection} beats ${computerSelection}
        The Player chose: ${playerSelection} 
        The Computer chose: ${computerSelection}`, playerScore++);
    } else if (computerSelection == "Rock" && playerSelection == "Scissors" ||
        computerSelection == "Paper" && playerSelection == "Rock" ||
        computerSelection == "Scissors" && playerSelection == "Paper") {
        return alert(`The Computer won ${computerSelection} beats ${playerSelection}
        The Computer chose: ${computerSelection} 
        The Player chose: ${playerSelection}`), computerScore++;
    } else if (playerSelection === computerSelection) {
        return alert(`It's a draw 
        The computer chose: ${computerSelection} 
        The user chose: ${playerSelection}`), draw++;
    } else if (playerSelection === null) {
        return alert("You must enter something")
    }
}

function playGame() {
    playRound(computerSelection);
    playRound(computerSelection)
    playRound(computerSelection)
    playRound(computerSelection)
    playRound(computerSelection)

    if (playerScore > computerScore) {
        alert(`the player won the game ${playerScore} 
        The Player scored ${playerScore}
        The Computer scored ${computerScore}
        and Drew ${draw}`)
    } else {
        alert(`The computer won the game ${computerScore}
        The Computer scored ${computerScore}
        The Player scored: ${playerScore}
        And Drew: ${draw}`);
    }
}

console.log(computerSelection);
playGame();