//Welcome page with message and start button

//Q&A page

var currentQuestion = 0;
var timer = 75;

var questions = [
  {
    text: "Is coding fun?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    text: "Is coding fun?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    text: "Is coding fun?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    text: "Is coding fun?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    text: "Is coding fun?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
  },
];

var questionText = questions[currentQuestion].text;
var answers = questions[currentQuestion].answers;
var correctAnswer = questions[currentQuestion].correctAnswer;

document.querySelector("#startButton").addEventListener("click", function () {
  document.querySelector("#welcomeDiv").classList.add("hide");
  document.querySelector("#questionsDiv").innerHTML +=
    "<h3>Question #1</h3><h5>" + questionText + "</h5><div id='answers'></div>";
  for (var i = 0; i < answers.length; i++) {
    document.querySelector("#answers").innerHTML +=
      "<button class='answerButton'>" + answers[i] + "</button>";
  }
  document
    .querySelector(".answerButton")
    .addEventListener("click", function () {});
});

//When submitted, if answer correct, currentQuestion++ if wrong timer -10 seconds

function userAnswer() {
  var correctAnswer = questions[currentIndex].correctAnswer;
  var outcome = document.getElementById("outcome");
  if (Answers === correctAnswer) {
    outcome.innerHTML = "Correct!";
    return currentQuestion++;
  } else {
    outcome.innerHTML = "Wrong!";
    timer = timer - 10;
    currentQuestion++;
  }
}
