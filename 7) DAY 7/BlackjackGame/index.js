let firstCard = 4;
let secondCard = 10;
let sum = firstCard+secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let cards = [firstCard, secondCard] //cards array

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "+cards[0]+" "+cards[1];

    if (sum < 21) {
        message = "Do you want to draw a new card?";
        // console.log("Do you want to draw a new card? 🤔");
    } else if (sum === 21) {
        message = "You've got BlackJack!!";
        // console.log("Hurray! You've got BlackJack!! 🥳");
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        // console.log("You're out of the game! 😭");
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard(){
    let card = 8;
    sum += card;
    cards.push(card)
    renderGame()
}
console.log(message)