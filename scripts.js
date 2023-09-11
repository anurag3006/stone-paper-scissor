const choices = ["Rock", "Paper", "Scissor"];

// function to get the coumputer's choice
function getComputerChoice() {
  let ans = choices[Math.floor(Math.random() * choices.length)];
  return ans;
}

// Number of rounds the game will be played;
var rounds = 5;

// final score after all rounds;
var score = 0;

// var playerSelection = prompt("type your choice");

// push the button and select the player selection
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");


rock.addEventListener("click",myFunction);
paper.addEventListener("click",myFunction);
scissor.addEventListener("click",myFunction);

// Showing the selections
const computer = document.querySelector("#computer");
const person = document.querySelector("#person");

// showing result on page
const r = document.querySelector("#final_score");


var playerSelection = "";
function myFunction(){
  // console.log(this.className);
  if(rounds === 0) {
    r.innerHTML = `Result: ${score}`;
    return;
  }
  playerSelection = this.className;
  person.innerHTML = "Your Selection : " + playerSelection;
  computerSelection = getComputerChoice();
  computer.innerHTML = "Computer Selection : " + computerSelection;
  console.log(playRound(playerSelection, computerSelection));
  rounds--;
  
}

// console.log(playerSelection);

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
        score++;
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
        score++;
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
        score++;
        break;

      default:
        result = "Tie !!";
        break;
    }
  }

  return result;
}

// RESTARTING THE GAME
const restart = document.querySelector("#restart")

restart.addEventListener("click",()=>{
  rounds = 5;
  score = 0;
  r.innerHTML = "Result";
  computer.innerHTML = "Computer Selection :"
  person.innerHTML = "Your Selection :"
  return;
})

// let r = playRound(playerSelection, computerSelection);
// console.log(r);

// playing the above rock-paper-scossor for N number of time;
function game(playRound, NumberOfTimes) {
  var score = 0; // final score

  for (let i = 0; i < NumberOfTimes; i++) {

    var computerSelection = getComputerChoice();
    // var playerSelection = prompt("type your choice");
    // var playerSelection = myFunction;

    let r = playRound(playerSelection, computerSelection);
    console.log(playerSelection,computerSelection,r);  //for better understanding
    if (r.includes("Won")) score++;
    // else if (r.includes("Lost")) score--;
  }
  return score;
}

// console.log(game(playRound,3));

