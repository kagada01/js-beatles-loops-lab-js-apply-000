
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var whatTheyPlay = [];

function theBeatlesPlay(musicians, instruments) {

  for (var i = 0; i<musicians.length; i++) { 

  var play = `${musicians[i]}` + " plays " + `${instruments[i]}`

  whatTheyPlay.push(play);
  }
return whatTheyPlay;
}

/////

function johnLennonFacts(johnLennonFacts) {
var excFacts = [];
var i = 0
var exclamation = "!!!"
  while (i<johnLennonFacts.length) {

  var excFact = `${johnLennonFacts[i]}` + exclamation

  excFacts.push(excFact);
  
  i++
  }
return excFacts;
}

////

function iLoveTheBeatles() {
  var container = []; 
  var beatleLove = "I love the Beatles!";  
  var i = 0;
 
    do {
      container.push(beatleLove);
      i++;

    }
      while (i<8);

      return container;
      }


