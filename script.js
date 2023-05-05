const tContainer = document.getElementById("t-container");
const circleOne = document.getElementById("circle-one");
const circleTwo = document.getElementById("circle-two");

circleTwo.addEventListener("click", () => {
  tContainer.style.backgroundColor = "white";
  circleOne.style.backgroundColor = "white";
  circleTwo.style.backgroundColor = "black";
});
circleOne.addEventListener("click", () => {
  tContainer.style.backgroundColor = "rgb(32, 31, 31)";
  circleOne.style.backgroundColor = "white";
  circleTwo.style.backgroundColor = "rgb(32, 31, 31)";
});
