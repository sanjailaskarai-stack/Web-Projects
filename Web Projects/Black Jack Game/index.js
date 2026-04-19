let hasBlackJack = false;
let isAlive = true;
let sum = 0;
let cards = [];
let message = "";

let messageElement = document.getElementById("message-element");
let sumElement = document.getElementById("sum-element");
let cardElement = document.getElementById("cards-element");

function getRandom() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;

    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    cardElement.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardElement.textContent += cards[i] + " ";
    }

    sumElement.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Pick another card";
    } else if (sum === 21) {
        message = "You have got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }

    messageElement.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = getRandom();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}