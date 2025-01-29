(
  function(){
    //*****************************
  // START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
  //*******************************
  //
  //Module 4 Assignment Instructions.
  //
  
  Hello Yaakov
  Good Bye Yaakov
  Good Bye Henry
  Good Bye Lara
  Hello Paul
  Hello Frank
    Hello Maria
    Good Bye Rim
    var names = [" Yaakov", "Yaakov", "Henry", "Lara", "Paul", "Frank", "Maria", "Rim"];
    for (var i=0; i < names.length; i++) {
      var firstLetter = names [i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })();

    
  
