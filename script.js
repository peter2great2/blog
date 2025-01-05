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
ampm.innerHTML = hour < 12 ? (ampm.innerHTML = "am") : (ampm.innerHTML = "pm");

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

// this code will work in the date

let day = document.getElementById("day");
let dayTwo = document.getElementById("dayTwo");
let month = document.getElementById("month");
let year = document.getElementById("year");

let dayTime = date.getDay();
if (dayTime === 0) {
   day.innerHTML = "Sunday, ";
} else if (dayTime === 1) {
   day.innerHTML = "Monday, ";
} else if (dayTime === 2) {
   day.innerHTML = "Tuesday, ";
} else if (dayTime === 3) {
   day.innerHTML = "Wednesday, ";
} else if (dayTime === 4) {
   day.innerHTML = "Thursday, ";
} else if (dayTime === 5) {
   day.innerHTML = "Friday, ";
} else {
   day.innerHTML = "Saturday, ";
}

let dayTwoTime = date.getDate();
if (dayTwoTime < 10) {
   dayTwo.innerHTML = `0${dayTwoTime}`;
} else {
   dayTwo.innerHTML = `${dayTwoTime}`;
}

let monthTime = date.getMonth();
if (monthTime === 0) {
   month.innerHTML = " January";
} else if (monthTime === 1) {
   month.innerHTML = " February";
} else if (monthTime === 2) {
   month.innerHTML = " March";
} else if (monthTime === 3) {
   month.innerHTML = " April";
} else if (monthTime === 4) {
   month.innerHTML = " May";
} else if (monthTime === 5) {
   month.innerHTML = " June";
} else if (monthTime === 6) {
   month.innerHTML = " July";
} else if (monthTime === 7) {
   month.innerHTML = " August";
} else if (monthTime === 8) {
   month.innerHTML = " September";
} else if (monthTime === 9) {
   month.innerHTML = " October";
} else if (monthTime === 10) {
   month.innerHTML = " November";
} else if (monthTime === 11) {
   month.innerHTML = " December";
}
let year_copy = document.getElementById("year_copy");

let yearTime = date.getFullYear();
year.innerHTML = ` ${yearTime}`;
year_copy.innerHTML = ` ${yearTime}`;
console.log(monthTime);
