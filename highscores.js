// Set a variable to select the list of highscores
let listOfHighscores = document.querySelector(".list-group");
// Retrieve the highscores from local storage
let highScores = JSON.parse(localStorage.getItem("highscores")) || [];

// Add a list of the highscores to the DOM
listOfHighscores.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} : ${score.score}</li>`;
  })
  .join("");

// Play Again button
let playAgain = document.querySelector("#play-again");

// Event listener for play again
playAgain.addEventListener("click", function () {
  window.location.href = "index.html";
});

let clear = document.querySelector("#clear");

// Remove the highscores from the page and local storage
clear.addEventListener("click", function () {
  listOfHighscores.textContent = "";
  localStorage.setItem("highscores", "[]");
});
