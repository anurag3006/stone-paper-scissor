const choices = ["Rock", "Paper", "Scissor"];

// function to get the coumputer's choice
function getComputerChoice() {
  let ans = choices[Math.floor(Math.random() * choices.length)];
  return ans;
}

var computerSelection = getComputerChoice();
var playerSelection = prompt("type your choice");

// function for single round of game

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  var result = ` `;

  if (playerSelection === "ROCK") {
    switch (computerSelection) {
      case "PAPER":
        result = `You Lost !!
                          ${computerSelection} beats ${playerSelection}.`;
        break;
      case "SCISSOR":
        result = `You Won !!
                          ${computerSelection} does not beats ${playerSelection}.`;
        break;

      default:
        result = "Tie !!";
        break;
    }
  } else if (playerSelection === "PAPER") {
    switch (computerSelection) {
      case "SCISSOR":
        result = `You Lost !!
                          ${computerSelection} beats ${playerSelection}.`;
        break;
      case "ROCK":
        result = `You Won !!
                          ${computerSelection} does not beats ${playerSelection}.`;
        break;

      default:
        result = "Tie !!";
        break;
    }
  } else {
    switch (computerSelection) {
      case "ROCK":
        result = `You Lost !!
                          ${computerSelection} beats ${playerSelection}.`;
        break;
      case "PAPER":
        result = `You Won !!
                          ${computerSelection} does not beats ${playerSelection}.`;
        break;

      default:
        result = "Tie !!";
        break;
    }
  }

  return result;
}

console.log("comp : "+computerSelection);

// let r = playRound(playerSelection, computerSelection);
// console.log(r);

// playing the above rock-paper-scossor for N number of time;
function game(playRound, NumberOfTimes) {
  var score = 0; // final score

  for (let i = 0; i < NumberOfTimes; i++) {
    let r = playRound(playerSelection, computerSelection);
    if (r.includes("Won")) score++;
    else if (r.includes("Lost")) score--;
  }
  return score;
}

console.log(game(playRound,3));
