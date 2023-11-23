var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor((Math.random() * 3)+1);
    console.log(randomNumber);
}

var randomChoosenColor = buttonColors[randomNumber];
gamePattern.push(randomChoosenColor);