// Assignment code here
var special = ["!", "@", "#", "$", "%", "&", "?"];
var number = [0,1,2,3,4,5,6,7,8,9];
var uppercase = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var generatePassword = function() {
var userLength = prompt("How long would you like the password? Choose a number between 8 and 128.");
if (userLength < 8 || userLength > 128) {
  alert("Number must be between 8 and 128. Try again.");

} else if (userLength >= 8 || userLength <= 128) {
  var userSpecial = confirm("Would you like special characters?");

  var userNumber = confirm("Would you like numeric characters?");

  var userUppercase = confirm("Would you like uppercase letters?");
 
  var userLowercase = confirm("Lowercase?");
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
