let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randId = Math.floor(Math.random() * 3);
  return options [randId];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You lost. Computer ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  //Generate Computer choice -> modular
  const compChoice = genCompChoice();

  if(userChoice === compChoice){
    //Draw game
    drawGame();
  }
  else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    }
    else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});