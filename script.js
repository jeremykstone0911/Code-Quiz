//Timer
// Declare a variable to select the HTML element to update the timer
let timer = document.querySelector("#timer");

// Declare a variable for amount of time left in quiz
let secondsLeft = 60;

// Timer function
function quizTimer() {
  let timerInterval = setInterval(function () {
    // Subtract 1 second every interval
    secondsLeft = secondsLeft - 1;
    // Update the local storage to the new time
    localStorage.setItem("time", secondsLeft);
    // Update the text on the HTML page
    timer.textContent = "Time: " + secondsLeft;
    // If time reaches 0 you are redirected to a new page
    if (secondsLeft === 0) {
      window.location.href = "score.html";
    }
  }, 1000);
}

// Call the quizTimer function
quizTimer();
