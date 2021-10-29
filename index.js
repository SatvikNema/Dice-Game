var winner = 0, randomNum1, randomNum2, s1, s2, gamesPlayed = 0, p1Won = 0, p2Won = 0,
  dice1 = document.querySelector(".img1"),
  dice2 = document.querySelector(".img2"),
  winner = document.querySelector("h1"),
  counterone = document.getElementById("counterone"),
  countertwo = document.getElementById("countertwo"),
  gamesPlayedElement = document.getElementById("totalPlayed"),
  winnerText = "";

function genNumbers() {
  randomNum1 = Math.floor(Math.random() * 6) + 1;
  randomNum2 = Math.floor(Math.random() * 6) + 1;
  s1 = "images/dice" + randomNum1 + ".png";
  s2 = "images/dice" + randomNum2 + ".png";

  dice1.setAttribute("src", s1);
  dice2.setAttribute("src", s2);

  if (randomNum1 > randomNum2){
    winnerText="Winner: p1";
    p1Won++;
  }

  else if (randomNum1 < randomNum2){
    winnerText="Winner: p2";
    p2Won++;
  }

  else winnerText="Draw";

  winner.innerHTML = winnerText;
  gamesPlayed++;
  counterone.innerHTML = "Won: "+p1Won;
  countertwo.innerHTML = "Won: "+p2Won;
  gamesPlayedElement.innerHTML = "Games played: "+gamesPlayed;
}

dice1.addEventListener("click", genNumbers);
dice2.addEventListener("click", genNumbers);

