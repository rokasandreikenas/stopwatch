const today = new Date();
const todayDate = document.getElementById("today-date");
const time = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.querySelector("#reset");

todayDate.innerText = today.toDateString();
startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTime);
resetButton.addEventListener("click", resetTime);

let sec = 0;
let mins = 0;
let isTimerStarted = false;

function addSecond() {
  // isTimerStarted - isTimerStarted === true
  if (isTimerStarted) {
    sec++;

    if (sec >= 60) {
      mins++;
      sec = 0;
    }

    const additionalSecZero = additionalZero(sec);
    const additionalMinsZero = additionalZero(mins);

    time.innerText = `${additionalMinsZero}${mins}:${additionalSecZero}${sec}`;

    setTimeout(addSecond, 1000);
  }
}

function additionalZero(time) {
  return time <= 9 ? "0" : "";
}

function startTime() {
  // !isTimerStarted - isTimerStarted === false
  if (!isTimerStarted) {
    isTimerStarted = true;
    addSecond();
    startButton.disabled = true;
  }
}

function stopTime() {
  isTimerStarted = false;
  startButton.disabled = false;
}

function resetTime() {
  sec = 0;
  mins = 0;
  time.innerText = "00:00";
  stopTime();
}
