// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defined character types. 

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//Prompt for the length of the password.
let passwordLength = parseInt(prompt("Please enter desired password length. Minimum of 8 characters required. Please do not exceed 128 characters."));
 
//console.log(passwordLength);

//Validation that length of password is set between 8 and 128 characters.  
if (passwordLength < 8 || passwordLength > 128) {
  let passwordLength = alert("Invalid entry. Please choose a password length between 8 and 128 characters.");

 
 










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);