var n = document.querySelectorAll(".drum").length;

//detecting button
for(var i=0; i<n;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttonclick= this.innerHTML;
makeSound(buttonclick);
animation(buttonclick);
});
}
//detecting keyboard
document.addEventListener("keypress", function(event){
  makeSound(event.key);
  animation(event.key)
});


function makeSound(key){

  switch(key)
  {
  case "w":
  var audio = new Audio("sounds/crash.mp3");
  audio.play()
  break;

  case "a":
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play()
  break;

  case "s":
  var audio = new Audio("sounds/snare.mp3");
  audio.play()
  break;

  case "d":
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play()
  break;

  case "j":
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play()
  break;

  case "k":
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play()
  break;

  case "l":
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play()
  break;

  default:
  alert("click the button");


  }
}
function animation (currentkey){

var a = document.querySelector("." + currentkey);
a.classList.add("pressed");
setTimeout(function(){
  a.classList.remove("pressed");
},100);

}
