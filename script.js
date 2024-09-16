
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  switch(randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice(){

  let humanChoice = (prompt("Rock, Paper or Scissors?")).toLowerCase();
  if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
  }
}

function playRound(humanChoice, computerChoice) { 

  if((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    alert(`                                       YOU WIN! 
       You picked ${humanChoice}, Computer picked ${computerChoice} || ${humanChoice} beats ${computerChoice}
                         Your Score ${humanScore += 1} : ${computerScore} Computer Score`);
  }
  else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
    alert(`                                    COMPUTER WINS! 
      You picked ${humanChoice}, Computer picked ${computerChoice} || ${computerChoice} beats ${humanChoice}
                       Your Score ${humanScore} : ${computerScore += 1} Computer Score`);
  }
  else if(humanChoice === computerChoice){
    alert(`TIRE || You picked ${humanChoice}, Computer picked ${computerChoice} 
     Your Score ${humanScore} : ${computerScore} Computer Score`);
  }
  else {
    alert("Wrong input, plaese try again");
  }

}

function playGame() {

  for(let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if(humanScore > computerScore) {
    alert(`Congratulations, You Won! 🏆
    Your score: ${humanScore} : ${computerScore} Computer score`);
  }
  else if(humanScore < computerScore) {
    alert(`You lost to the computer! 😥
    Your score: ${humanScore} : ${computerScore} Computer score`);
  }
  else {
    alert(`TIRED! 🌝
    Your score: ${humanScore} : ${computerScore} Computer score`);
  }
}

playGame();
