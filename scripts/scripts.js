var romanOutput = "";
var numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var numeralArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
function romanNumerals(originalNumber) {
  for (var i = 0; i < numberArray.length; i++) {
    while (numberArray[i] <= originalNumber) {
      romanOutput += numeralArray[i];
      originalNumber -= numberArray[i];
    }
  }
  return romanOutput;
}
// front-end
$(document).ready(function(){
  $("form#roman").submit(function(event){
    event.preventDefault();
    var originalNumber = parseInt($("input#userInput").val());
    romanNumerals(originalNumber);
    $("#answer").text(romanOutput);
  });
});
