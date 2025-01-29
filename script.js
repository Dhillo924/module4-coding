/*
Solution of assignment 4:
Expected Output:

  
  Hello Yaakov
  Good Bye Yaakov
  Good Bye Henry
  Good Bye Lara
  Hello Paul
  Hello Frank
    Hello Maria
    Good Bye Jim
*/

(function(){
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

    
  
