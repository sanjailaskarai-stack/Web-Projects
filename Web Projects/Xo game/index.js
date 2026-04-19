const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell,index)=>{
cell.addEventListener("click",()=>handleClick(cell,index));
});

function handleClick(cell,index){

if(cell.textContent !== "" || !gameActive){
return;
}

cell.textContent = currentPlayer;

if(checkWinner()){
statusText.textContent = "Player " + currentPlayer + " Wins!";
gameActive = false;
return;
}

if(checkDraw()){
statusText.textContent = "Draw!";
gameActive = false;
return;
}

currentPlayer = currentPlayer === "X" ? "O" : "X";
statusText.textContent = "Player " + currentPlayer + " Turn";

}

function checkWinner(){

for(let pattern of winPatterns){

const [a,b,c] = pattern;

if(
cells[a].textContent &&
cells[a].textContent === cells[b].textContent &&
cells[a].textContent === cells[c].textContent
){
return true;
}

}

return false;
}

function checkDraw(){

return [...cells].every(cell => cell.textContent !== "");

}

restartBtn.addEventListener("click",restartGame);

function restartGame(){

cells.forEach(cell=>{
cell.textContent="";
});

currentPlayer="X";
gameActive=true;
statusText.textContent="Player X Turn";

}