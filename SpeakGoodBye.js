(function(window) {
  var byeSpeaker = new Object();
  var speakWord ="Good Bye";
  byeSpeak.speak = function speak(name) {
    console.log(speakWord + "" + name);
  };
  window.byeSpeaker = byeSpeaker;
})(window);
