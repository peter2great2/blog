const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
let date = new Date();

function timeAndDate() {
  let hourTime = date.getHours();
  let minutesTime = date.getMinutes();
  let secondsTime = date.getSeconds();
  hour.innerHTML = hourTime;
  minutes.innerHTML = minutesTime;
  // seconds.innerHTML = secondsTime;
  for (let i = 0; i < secondsTime.length; i++) {
    console.log(secondsTime[i]);
  }
  hourTime > 12 ? (ampm.innerHTML = "pm") : (ampm.innerHTML = "am");
}

timeAndDate();
