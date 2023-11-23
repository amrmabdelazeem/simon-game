var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
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
$(".btn").click(function(){
    var userChoosenColor = $(this).attr("id");
    console.log(userChoosenColor);
    userClickedPattern.push(userChoosenColor);

    playSound(userChoosenColor);
    animatePress(userChoosenColor);
 })

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");

    setTimeout(function(){
        $("."+currentColor).removeClass("pressed")
    }, 100);
}