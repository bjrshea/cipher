var userSentence = "";
var capitalizedPhase = "";

var capitalizeFirstAndLast = function(input) {
  var singleWord = input.replace(/\s/, "");
  var firstLetter = singleWord.match(/^[a-z]/);
  var firstLetterUppercase = firstLetter.toString().toUpperCase();
  var lastLetter = singleWord.match(/[a-z]$/);
  var lastLetterUppercase = lastLetter.toString().toUpperCase();
  return firstLetterUppercase + lastLetterUppercase;
}
var reverseLettersFunction = function(twoLetters) {
  return twoLetters.split("").reverse().join("");
}

userSentence = prompt("Enter a sentence.");
var firstLastLetterUpperCase = capitalizeFirstAndLast(userSentence);
var reverseLetters = reverseLettersFunction(firstLastLetterUpperCase);
console.log(reverseLetters);
