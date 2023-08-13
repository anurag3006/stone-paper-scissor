const choices = ['Rock', 'Paper' , 'Scissor'];

// function to get the coumputer's choice
function getComputerChoice() {
    let ans = choices[Math.floor(Math.random()*choices.length)];
    return ans;
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";

// function for single round of game

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        console.log("Lost ! ");
    }
}

console.log(computerSelection);

playRound(playerSelection,computerSelection);
