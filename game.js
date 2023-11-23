var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;

function nextSequence() {
    userClickedPattern=[];
  $("h1").text("Level " + level);
  level++;

  var randomNumber = Math.floor(Math.random() * 3 + 1);
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);

  $("#" + randomChoosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChoosenColor);
  animatePress(randomChoosenColor);
}

$(".btn").click(function () {
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);

  playSound(userChoosenColor);
  animatePress(userChoosenColor);
  checkAnswer(userClickedPattern.length-1)
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");

  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keydown(function () {
  if (gamePattern.length === 0) {
    nextSequence();
  }
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(nextSequence(),1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
    }
}