// Every time the page loads, we will get random colors
// Defining first 6 colors
var colors = generateRandomColors(6);

// we'll loop through each square and asign them ramdon colors with a for loop
var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var clickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); // will give us 2 buttons

init();
function init() {
  setUpModeListeners();
  setUpSquares();
  reset();
}

function setUpModeListeners() {
  // modeButtons listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      // we removed selected class from both of the buttons and added it to the clicked one
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numOfSquares = 3) : (numOfSquares = 6);
      reset();
    });
  }
}

function setUpSquares() {
  // squares listeners
  for (var i = 0; i < squares.length; i++) {
    // add click event listeners to squares
    squares[i].addEventListener("click", function () {
      // grab color of clicked square
      clickedColor = this.style.backgroundColor;
      // compare it to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again!";
        changeColors(clickedColor);
        // will change background color of h1 to clicked color
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}
function reset() {
  // generate all new colors
  colors = generateRandomColors(numOfSquares);
  // pick a new random color from the array
  pickedColor = pickColor();
  // change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  // Change colors of the squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New Colors";
  // every time we reset, messageDisplay will be empty
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelBlue";
}
resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  // loop through all the squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an empty array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255

  var b = Math.floor(Math.random() * 256);
  // return a stirng in rgb format

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
