 var player1Score = localStorage.getItem("player1Score")|| 0;
 var player2Score = localStorage.getItem("player2Score")|| 0;

 player1Score = parseInt(player1Score);
  player2Score = parseInt(player2Score);

  var player1 = prompt("what is player 1 name");
  var player2 = prompt("what is player 2 name");
  document.querySelector("#js-player1").innerText = `${player1}`;
    document.querySelector("#js-player2").innerText = `${player2}`

function diceScore (){

 var randomNumber1 = Math.floor( Math.random()*6) +1;
 var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1)
 var randomNumber2 = Math.floor( Math.random()*6) +1;

 var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2)



if (randomNumber1 > randomNumber2 ) {
  player1Score++
  document.querySelector("h1").innerText = (`${player1} you won`)
}else if (randomNumber1 < randomNumber2) {
  player2Score++
    document.querySelector("h1").innerText = (`${player2} you won`)
}else { document.querySelector("h1").innerText = ("both tie")}



localStorage.setItem("player1Score", player1Score);
localStorage.setItem("player2Score", player2Score);

document.getElementById("scoreboard").innerHTML = `
  <p>${player1} Score: ${player1Score}</p>
  <p>${player2} Score: ${player2Score}</p>
`;
}


  
function resetScore() {
  // Reset values
  player1Score = 0;
  player2Score = 0;

  // Update localStorage
  localStorage.setItem("player1Score", player1Score);
  localStorage.setItem("player2Score", player2Score);

  // Update displayed scores
  const scoreboard = document.getElementById("scoreboard");
  if (scoreboard) {
    scoreboard.innerHTML = `
  <p>${player1} Score: ${player1Score}</p>
  <p>${player2} Score: ${player2Score}</p>
`;
  }

  // Optionally, update the heading
  document.querySelector("h1").innerText = "Scores Reset!";
}

