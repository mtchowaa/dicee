var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImageSource = "images/" + randomDiceImage;

var player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src", randomDiceImageSource);

// Player2

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";
var player2 = document.querySelectorAll("img")[1];

player2.setAttribute("src", randomDiceImageSource2);

// Result

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
heading.innerText = "🚩Player 1 Win";
} else if (randomNumber1 < randomNumber2) {
  heading.innerText = "Player 2 Win 🚩";
} else {
  heading.innerText = "Draw!";
}
