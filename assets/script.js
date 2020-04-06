




document.querySelector("#startButton").addEventListener("click", function () {
  document.querySelector("#welcomeDiv").classList.add("hide");
});

document.querySelector("#questionsDiv")
var currentQuestion = 0
var timer = 75
var answers = questions[currentQuestion].answers
var questions = [
    {text: "what is the capital of north korea?",
    answers: ["pyongyang","tokyo"]
    correctAnswer: "pyongyang"},
    {text: "what is the capital of japan?",
    answers: ["pyongyang","tokyo"]
    correctAnswer: "tokyo"},
    {text: "what is the capital of north korea?",
    answers: ["pyongyang","tokyo"]
    correctAnswer: "pyongyang"},
    {text: "what is the capital of japan?",
    answers: ["pyongyang","tokyo"]
    correctAnswer: "tokyo"},
]


/*Welcome Page
welcome text with start button
start button clears page questions begin and timer starts
questions require answer buttons
wrong answers take away time
right answers populate new question while time continues
array of answers

questions are gonna be in an array of objects.



for loop to create buttons:

for (for loop shit)
document.querySelector(#answer1).innerHTML += "<button>"+answers[i]+"</button>"
innerHTML = ""


<whatever></whatever>

when submitted, if answer correct, currentQuestion++
if wrong timer -10



*/