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

//Questions and answers stored in objects

let question1 = {
  question: "1.  Which of the below is NOT a programming language?",
  answer1: "Javascript",
  answer2: "English",
  answer3: "C++",
  answer4: "Python",
  correctAnswer: "answerTwo",
};

let question2 = {
  question: "2.  If/Else statements are used for what?",
  answer1: "Selecting a random piece of data.",
  answer2: "To help indecisive people figure out what to have for dinner.",
  answer3: 'To provide a "choice": if this do that, if not else do this.',
  answer4: "Sorting numbers by even or odd.",
  correctAnswer: "answerThree",
};
let question3 = {
  question: "3.  For loops are used for what?",
  answer1: "Breakfast",
  answer2:
    "To repeat a command until the specified condition is no longer true",
  answer3: "To create a never ending cycle ",
  answer4: "To repeat a command the specified number of times",
  correctAnswer: "answerFour",
};
let question4 = {
  question: "4.  While loops are used for what?",
  answer1: "A healthy snack",
  answer2: "To repeat a command a specified number of times",
  answer3:
    "To repeat a command until the specified condition is no longer true",
  answer4: "Taking a break while long scripts run",
  correctAnswer: "answerThree",
};
let question5 = {
  question: "5.  Is coding fun?",
  answer1: "Heck Yes!",
  answer2: "Nah",
  answer3: "It is okay!",
  answer4: "This is not the right answer",
  correctAnswer: "answerOne",
};
