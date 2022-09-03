// Assignment code here
var special = ["!", "@", "#", "$", "%", "&", "?"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var generatePassword = function () {
  var newPassword = ""
  
  //User prompts for password criteria
  var userLength = prompt("How long would you like the password? Choose a number between 8 and 128.");

  if (!userLength) {
    alert("You must input a value");

  } else if (userLength < 8 || userLength > 128) {
    alert("Number must be between 8 and 128. Try again.");

  } else if (userLength >= 8 || userLength <= 128) {
    var userSpecial = confirm("Would you like special characters?");

    var userNumber = confirm("Would you like numeric characters?");

    var userUppercase = confirm("Would you like uppercase letters?");

    var userLowercase = confirm("Lowercase?");

    //for loop to integrate the user's criteria options into the genterator
    for (var i = 0; i < userLength; i++) {


      if (userSpecial === true && newPassword.length < userLength) {
        var index = Math.floor(Math.random() * special.length)
        newPassword = newPassword + special[index]
      }
      if (userNumber === true && newPassword.length < userLength) {
        var index = Math.floor(Math.random() * number.length)
        newPassword = newPassword + number[index]
      }
      if (userUppercase === true && newPassword.length < userLength) {
        var index = Math.floor(Math.random() * uppercase.length)
        newPassword = newPassword + uppercase[index]
      }
      if (userLowercase === true && newPassword.length < userLength) {
        var index = Math.floor(Math.random() * lowercase.length)
        newPassword = newPassword + lowercase[index]
      }
    }
    return newPassword
  }


}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
