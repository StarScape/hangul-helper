$(document).ready(function() {
});

window.onload = function () {
  $('.play-button').css('display', 'block');
}

var playAudio = function (s) {
  console.log(s.children[0]);
  s.children[0].play();
}