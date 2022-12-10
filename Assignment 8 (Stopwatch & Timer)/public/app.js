var displaysec = document.getElementById("sec");
var displaymin = document.getElementById("min");
var displayhour = document.getElementById("hour");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const selectMenu = document.querySelectorAll("select");
const option = document.querySelectorAll("option");
const secMenu = document.getElementById("secMenu");
const minMenu = document.getElementById("minMenu");
const hourMenu = document.getElementById("hourMenu");
let display = document.getElementById("display");

var interval;
var min = "00";
var sec = "00";
var hour = "00";

const startsBtn = document.getElementById("startsBtn");
const resetsBtn = document.getElementById("resetsBtn");
const pausesBtn = document.getElementById("pausesBtn");
function startWatch() {
  startsBtn.disabled = true;
  resetsBtn.disabled = false;
  pausesBtn.disabled = false;
  interval = setInterval(function () {
    sec++;
    if (sec == 60) {
      sec = 0;
      min++
      if (min == 60) {
        min = 0;
        hour++
      }
    }

    displaysec.innerHTML = sec
    displaymin.innerHTML = min
    displayhour.innerHTML = hour
  }, 1000)
}

function pauseWatch() {
  startsBtn.disabled = false;
  resetsBtn.disabled = false;
  pausesBtn.disabled = true;
  clearInterval(interval);
}

function resetWatch() {
  startsBtn.disabled = false;
  resetsBtn.disabled = true;
  pausesBtn.disabled = true;
  pauseWatch();
  min = "00";
  sec = "00";
  hour = "00";
  displaysec.innerHTML = sec
  displaymin.innerHTML = min
  displayhour.innerHTML = hour
}

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function displayTime() {
  var sec = secMenu.value;
  var min = minMenu.value;
  var hour = hourMenu.value;

  display.innerHTML = (hour > 9 ? hour : hour) + " : " + (min > 9 ? min : min) + " : " + (sec > 9 ? sec : sec);
}

function startTimer() {
  var sec = secMenu.value;
  var min = minMenu.value;
  var hour = hourMenu.value;

  if (sec === "00" && min === "00" && hour === "00") {
    alert("Please select numbers");
  } else {
    startBtn.disabled = true;
    resetBtn.disabled = false;
    var date1 = new Date();
    var countDownDate = new Date();
    countDownDate.setTime(
      date1.getTime() + hour * 60 * 1000 + min * 60 * 1000 + sec * 1000 + 1 * 1000
    );

    var x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      display.innerHTML = (hours > 9 ? hours : "0" + hours) + " : " + (minutes > 9 ? minutes : "0" + minutes) + " : " + (seconds > 9 ? seconds : "0" + seconds);
      ;
      if (display.innerHTML == "00 : 00 : 00") {
        startBtn.disabled = false;
        resetBtn.disabled = true;
        alert("Times Out");
        clearInterval(x);
      }
      resetBtn.addEventListener("click", () => {
        clearInterval(x);
        startBtn.disabled = false;
        resetBtn.disabled = true;
        display.innerHTML = "00 : 00 : 00";
      })
    }, 1000);
  }
}

const timer = document.getElementById("timer");
const stopwatch = document.getElementById("stopwatch");
const switchTimer = document.getElementById("switchTimer");
const switchWatch = document.getElementById("switchWatch");

switchTimer.addEventListener("click", () => {
  stopwatch.classList.add("hide");
  timer.classList.remove("hide");
})

switchWatch.addEventListener("click", () => {
  stopwatch.classList.remove("hide");
  timer.classList.add("hide");
})