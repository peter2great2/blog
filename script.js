const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
let date = new Date();
let hourTime = date.getHours();
let minutesTime = date.getMinutes();
let secondsTime = date.getSeconds();
hour.innerHTML = hourTime;
minutes.innerHTML = minutesTime;
seconds.innerHTML = secondsTime;

function updateSeconds() {
  secondsTime++;
  // Decrement seconds

  if (secondsTime == 60) {
    secondsTime = 0;
    // Wrap around to 59 if seconds reach 0

    updateMinutes();
    // Call function to update minutes
  }
  seconds.innerHTML = secondsTime;
}

function updateMinutes() {
  minutesTime++;
  // Decrement minutes

  if (minutesTime >= 59) {
    minutesTime = 0;
    // Wrap around to 59 if minutes reach 0

    updateHours();
    // Call function to update hours
  }
  minutes.innerHTML = minutesTime;
}

function updateHours() {
  hourTime++;
  // Decrement hours

  if ((hourTime = 23)) {
    hourTime = 0;
    // Wrap around to 23 if hours reach 0
  }
  hour.innerHTML = hourTime;
}

function timeAndDate() {
  updateSeconds();
}

timeAndDate();
setInterval(timeAndDate, 1000);
// Update every second

console.log("hello world");
