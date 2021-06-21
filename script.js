/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
var questionCount = 0;
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5  = document.getElementById("q1a5");
q1a1.addEventListener("click", result1);
q1a1.addEventListener("click", disabling);
q1a2.addEventListener("click", result1);
q1a2.addEventListener("click", disablin);
q1a3.addEventListener("click", result1);
q1a3.addEventListener("click", disabli);
q1a4.addEventListener("click", result1);
q1a4.addEventListener("click", disablingg);
q1a5.addEventListener("click", updateResult);
function result1() {
  questionCount += 25;
  
}
var result = document.getElementById("result");
function disablin(){
  document.getElementById("q1a2").disabled = true;
  
}
function disabli(){
  document.getElementById("q1a3").disabled = true;
  
}
function disablingg(){
  document.getElementById("q1a4").disabled = true;
  
}

function disabling(){
  document.getElementById("q1a1").disabled = true;
  
}

function resetting(){
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
}


function updateResult() {
    result.innerHTML = "Your result is...";

  var ugh = questionCount;
  
    result.innerHTML = "You are trying to prevent covid " + ugh + "% of the time";
  
}

