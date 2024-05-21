// Step 1: Create random numbers between 1 and 6 for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Step 2: Construct the file names for the dice images
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// Step 3: Use setAttribute to set the src attributes of the left and right <img> elements
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);

// Step 4: Change the text in the <h1> to show which user won or if it was a draw
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins! 🚩";
} else {
    heading.innerHTML = "Draw!";
}
     