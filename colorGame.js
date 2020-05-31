var numSquares = 6;
var colors = []; //generateRandomColor(numSquares); // already defined in the reset and init
var pickedColor; //= pickColor(); // already defined in the reset and init

var squares = document.querySelectorAll(".square");

var colorDisplay = document.querySelector("#colorDisplay");

var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode button event listener
  setupModeButton();
  setupSquares();
  reset();
}

function setupModeButton(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      // if (this.textContent === "Easy"){
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {

    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColor(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Color";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
}

// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColor(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i=0; i<squares.length; i++){
//     if (colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColor(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i=0; i<squares.length; i++){
//     squares[i].style.background = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function() {
  reset();
  // colors = generateRandomColor(numSquares);
  // pickedColor = pickColor();
  // colorDisplay.textContent = pickedColor;
  // this.textContent = "New Color";
  // for (var i = 0; i < squares.length; i++) {
  //   squares[i].style.background = colors[i];
  // }
  // h1.style.background = "steelblue";
  // messageDisplay.textContent = "";
});


function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random]
}

function generateRandomColor(num) {
  var arr = [];
  for (i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
