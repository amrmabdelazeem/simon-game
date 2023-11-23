var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {

}
var randomNumber = Math.floor(Math.random() * 3 + 1);
var randomChoosenColor = buttonColors[randomNumber];
gamePattern.push(randomChoosenColor);
console.log(randomChoosenColor);

$("#"+randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
