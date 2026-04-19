let scoreAway= document.getElementById("score-away");
let scoreHome = document.getElementById("score-home");
let countHome = 0;
let countAway =0;
function oneBasketHome() {
    countHome = countHome+1;
    scoreHome.textContent = countHome;
    
}
function twoBasketHome() {
    countHome = countHome+2;
    scoreHome.textContent = countHome;
}
function threeBasketHome() {
    countHome = countHome+3;
    scoreHome.textContent = countHome;
}
function oneBasketAway() {
    countAway = countAway+1;
    scoreAway.textContent = countAway;
}
function twoBasketAway() {
    countAway = countAway+2;
    scoreAway.textContent = countAway;
}
function threeBasketAway() {
    countAway = countAway+3;
    scoreAway.textContent = countAway;
}
function reset() {
    countHome=0;
    countAway=0;
    scoreHome.textContent=countHome;
    scoreAway.textContent=countAway;
}