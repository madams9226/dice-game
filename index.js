function rollDice() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

  var image1 = document.querySelector(".img1");
  var image2 = document.querySelector(".img2");

  image1.setAttribute("src", randomDiceImage1);
  image2.setAttribute("src", randomDiceImage2);

  var heading = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins! 🚩";
  } else {
    heading.innerHTML = "Draw!";
  }

}

// This makes it roll automatically when the page loads
rollDice();

     
