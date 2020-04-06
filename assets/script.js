



//Welcome page with message and start button
document.querySelector("#startButton").addEventListener("click", function () {
  document.querySelector("#welcomeDiv").classList.add("hide");
  });
  
  //Q&A page
  document.querySelector("#questionsDiv")
  var currentQuestion = 0
  var timer = 75
  var answers = questions[currentQuestion].answers
  var correctAnswer = questions[currentQuestion].correctAnswer
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
  
    //For loop that creates buttons
    for (var i = 0; i < answers.length; currentQuestion++)
    document.querySelector("#answers").innerHTML += "<button>"+answers[i]+"</button>"
    innerHTML = ""
  
    //When submitted, if answer correct, currentQuestion++ if wrong timer -10 seconds
    
    function userAnswer () {
    var correctAnswer = questions[currentIndex].correctAnswer;
    var outcome = document.getElementById("outcome");
    if (Answers === correctAnswer) {
        outcome.innerHTML = 'Correct!';
    return currentQuestion++
    }
    else {
        outcome.innerHTML = "Wrong!";
        timer = timer - 10;
        currentQuestion++}
      }
  