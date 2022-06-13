function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return `It's a tie! You both chose ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "WooHoo! You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "Aw yeah! You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "Woooo! You win! Scissors beats Paper";
    } else {
      return `Oh no! You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
