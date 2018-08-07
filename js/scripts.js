var userSentence = "";
var capitalizedPhase = "";

var capitalizeFirstAndLast = function(userSentence) {
  var firstLetterCapitalized = userSentence.replace(/^[a-z]/, function(firstLetter) {
     return firstLetter.toUpperCase();
  });

  var firstAndLastLettersCapitalized = firstLetterCapitalized.replace(/[a-z]$/, function(lastLetter) {
     return lastLetter.toUpperCase();
  });

  return firstAndLastLettersCapitalized;
}

userSentence = prompt("Enter a sentence.");
capitalizedPhase = capitalizeFirstAndLast(userSentence);
console.log(capitalizedPhase);
