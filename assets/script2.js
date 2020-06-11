//the thing below clears the welcomeDiv entirely
document.querySelector("#welcomeDiv").innerHTML = "";
//however, you will need to rewrite your hTML if you want it to go back to the way it was. clearing the HTML is not undoable without rewriting the HTML completely
document.querySelector("#welcomeDiv").innerHTML =
  "<h3>welcome to the quiz!!</h3>";
