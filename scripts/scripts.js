// var originalNumber="";

var numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var numeralArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "IX", "V", "IV", "I"];
// var inputArray = [];
function romanNumerals(inputArray) {
  for (var i = 1; i <= inputArray.length; i++) {
  alert(numberArray + "!");
  }
}



// front-end
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var originalNumber = $("input#userInput").val();
    var inputArray = (originalNumber.split(""));
    romanNumerals(inputArray);
  });
});
