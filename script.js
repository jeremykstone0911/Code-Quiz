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

//Questions stored in an array
let questions = [question1, question2, question3, question4, question5];

let questioN = document.querySelector("#question");
let firstAnswer = document.querySelector("#answer1");
let secondAnswer = document.querySelector("#answer2");
let thirdAnswer = document.querySelector("#answer3");
let fourthAnswer = document.querySelector("#answer4");
let answers = document.querySelector("#answers");

let questionIndex = 0;

//Display the questions on the page
questioN.textContent = questions[questionIndex].question;
firstAnswer.textContent = questions[questionIndex].answer1;
secondAnswer.textContent = questions[questionIndex].answer2;
thirdAnswer.textContent = questions[questionIndex].answer3;
fourthAnswer.textContent = questions[questionIndex].answer4;

// Declaring a variable to select for the element that will display if they answered the question correctly
let printResult = document.querySelector("#result");

// Click handler function
function handleClick(event) {
  // If they choose the first answer
  if (event.target.matches("#answer1")) {
    // Determining whether or not the answer is correct or not
    if (questions[questionIndex].correctAnswer === "answerOne") {
      // print correct if it's the correct answer
      printResult.textContent = "Correct!";
      // make a call back function to remove the message after 1 second
      setTimeout(function () {
        printResult.textContent = "";
      }, 1000);
    } else {
      printResult.textContent = "Incorrect! -10s";
      setTimeout(function () {
        printResult.textContent = "";
      }, 1000);
      // If the answer is not correct remove time from the timer
      secondsLeft = secondsLeft - 10;
    }

    // Repeat for all the other  possible answers
  } else if (event.target.matches("#answer2")) {
    if (questions[questionIndex].correctAnswer === "answerTwo") {
      printResult.textContent = "Correct!";
      setTimeout(function () {
        printResult.textContent = "";
      }, 1000);
    } else {
      printResult.textContent = "Incorrect! -10s";
      setTimeout(function () {
        printResult.textContent = "";
      }, 1000);
      secondsLeft = secondsLeft - 10;
    }
  } else if (event.target.matches("#answer3")) {
    if (questions[questionIndex].correctAnswer === "answerThree") {
      printResult.textContent = "Correct!";
      setTimeout(function () {
        printResult.textContent = "";
      }, 1000);
    } else {
      printResult.textContent = "Incorrect! -10s";
      setTimeout(function () {
        printResult.textContent = "";
      }, 1000);
      secondsLeft = secondsLeft - 10;
    }
  } else if (event.target.matches("#answer4")) {
    if (questions[questionIndex].correctAnswer === "answerFour") {
      printResult.textContent = "Correct!";
      setTimeout(function () {
        printResult.textContent = "";
      }, 1000);
    } else {
      printResult.textContent = "Incorrect! -10s";
      setTimeout(function () {
        printResult.textContent = "";
      }, 1000);
      secondsLeft = secondsLeft - 10;
    }
  }
  // Update the question index for a new question after they pick an answer
  questionIndex += 1;
  // Check to see if there are more questions left in the array
  // If there is another one, then the DOM is updated with that question
  if (questionIndex < questions.length) {
    questioN.textContent = questions[questionIndex].question;
    firstAnswer.textContent = questions[questionIndex].answer1;
    secondAnswer.textContent = questions[questionIndex].answer2;
    thirdAnswer.textContent = questions[questionIndex].answer3;
    fourthAnswer.textContent = questions[questionIndex].answer4;
    // If secondsLeft becomes negative because of the time penalty, then it is change to 0
  } else {
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    // The time key is updated with the new value after the penalty
    localStorage.setItem("time", secondsLeft);
    // Redirected to the score submission page
    window.location.href = "score.html";
  }
}

// Event listener for click event
answers.addEventListener("click", handleClick);
