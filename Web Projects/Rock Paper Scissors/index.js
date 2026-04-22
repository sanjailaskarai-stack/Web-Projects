let playerScore = 0;
let computerScore = 0;

const emoji = {
rock: "✊",
paper: "✋",
scissors: "✌"
};

function playGame(playerChoice){

const choices = ["rock","paper","scissors"];
const computerChoice = choices[Math.floor(Math.random()*3)];

document.getElementById("playerMove").innerText =
"Player chose: " + emoji[playerChoice];

document.getElementById("computerMove").innerText =
"Computer chose: " + emoji[computerChoice];

let result="";

if(playerChoice === computerChoice){
result = "It's a Draw!";
}
else if(
playerChoice==="rock" && computerChoice==="scissors" ||
playerChoice==="paper" && computerChoice==="rock" ||
playerChoice==="scissors" && computerChoice==="paper"
){
result = "You Win!";
playerScore++;
}
else{
result = "Computer Wins!";
computerScore++;
}

document.getElementById("resultText").innerText = result;

document.getElementById("playerScore").innerText = playerScore;
document.getElementById("computerScore").innerText = computerScore;

}

function resetGame(){

playerScore = 0;
computerScore = 0;

document.getElementById("playerScore").innerText = 0;
document.getElementById("computerScore").innerText = 0;

document.getElementById("playerMove").innerText = "";
document.getElementById("computerMove").innerText = "";
document.getElementById("resultText").innerText = "Make your move!";

}