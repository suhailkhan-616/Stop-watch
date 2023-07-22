// Stop Watch
// Window.onload is use for Get starting the page load .
// All function use for run the programms. 
// if()condition use for condition cheack true or false 
// clearInterval() use for stop the setInterval .
window.onload = function() {
  // it is stores in global var .
  // docuements.getElementById() is use for  html documents Ids # hits in js

  var minuts = 00;
  var seconds = 00;
  var tens = 00;
  var innerMinuts = document.getElementById('minuts');
  var innerSeconds = document.getElementById('seconds');
  var innerTens = document.getElementById("tens");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  //onclick events on the buttons
  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
  buttonStop.onclick = function() {
    clearInterval(Interval);
  }
  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minuts = "00";
    innerTens.innerHTML = tens;
    innerSeconds.innerHTML = seconds;
    innerMinuts.innerHTML = minuts;
  }
  function startTimer() {
    tens++;
    if (tens <= 9) {
      innerTens.innerHTML = "0" + tens;
      console.log(tens + "One");
    }
    if (tens > 9) {
      innerTens.innerHTML = tens;
      console.log(tens + "Two");
    }
    if (tens > 99) {
      console.log(tens + "Three");
      seconds++;
      innerSeconds.innerHTML = "0" + seconds;
      tens = 0;
      innerTens.innerHtml = "0" + 0;
    }
    if (seconds > 9) {
      innerSeconds.innerHTML = seconds;
      console.log(seconds + "four");
    }
    if (seconds > 59) {
      console.log(seconds + "fifth");
      minuts++;
      innerMinuts.innerHTML = "0" + minuts;
      seconds = 0;
      innerSeconds.innerHtml = "0" + 0;
    }
  }
}
