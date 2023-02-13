// document.querySelectorAll("button")[0].addEventListener("click", handleClick1);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick2);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick3);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick4);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick5);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick6);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick7);

// function handleClick1() {
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// }
// function handleClick2() {
//   var audio = new Audio("sounds/kick-bass.mp3");
//   audio.play();
// }
// function handleClick3() {
//   var audio = new Audio("sounds/snare.mp3");
//   audio.play();
// }
// function handleClick4() {
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }
// function handleClick5() {
//   var audio = new Audio("sounds/tom-2.mp3");
//   audio.play();
// }
// function handleClick6() {
//   var audio = new Audio("sounds/tom-3.mp3");
//   audio.play();
// }
// function handleClick7() {
//   var audio = new Audio("sounds/tom-4.mp3");
//   audio.play();
// }

// ********************************  Written By angela **************************************************************

//detecting button press
var numDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < numDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "W":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "A":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "S":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "D":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "J":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "K":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "L":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
