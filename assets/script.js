// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defined character types. 

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Begin generatePassword Function. 

function generatePassword() {
  //Function includes: prompts and confirms for inputs; loop of inputs to fill an empty array, and result of a joined array that provides a string to display the password as one element.
 
//Empty array created and characters are added until passwordLength is satisfied. 
  let passwordArray = []

//Prompt for the length of the password.
  let passwordLength = parseInt(prompt("Please enter desired password length. Minimum of 8 characters required. Please do not exceed 128 characters."));
  
  //console.log(passwordLength);

  //Validation that length of password is set between 8 and 128 characters.  
  if (passwordLength < 8 || passwordLength > 128) {
    let passwordLength = alert("Invalid entry. Please choose a password length between 8 and 128 characters.");

//Confirmation for the types of characters to include in the password.

  //Confirm use of lowercase characters.
  let lowercaseConfirm = window.confirm("Please press okay if you would like to include lowercase characters in the password.");

  //Confirm use of uppercase characters.
  let uppercaseConfirm = window.confirm("Please press okay if you would like to include uppercase characters in the password.");

  //Confirm use of numerical characters.
  let numericalConfirm = window.confirm("Please press okay if you would like to include numerical characters in the password.");

  //Confirm use of special characters.
  let specialConfirm = window.confirm("Please press okay if you would like to include special characters in the password.");

  //Alert added to advise if no characters are confirmed, that the password generation cannot continue.
  if (!lowercaseConfirm && !uppercaseConfirm && !numericalConfirm && !specialConfirm) {
      alert("Please choose at least one character type to generate password.")
  } 


//Loop function generates one of each character selected until the array satisfies the user-defined length. 
 
for (var i = 0; passwordArray.length < passwordLength; i++) {
 
  if (lowercaseConfirm === true && passwordArray.length <= passwordLength) {
    let lowercaseInput = lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharacters.length));
    passwordArray.push(lowercaseInput);
    console.log(passwordArray.length)
    } else {
    lowercaseConfirm = false;
  }

  if (uppercaseConfirm === true && passwordArray.length < passwordLength) {
    let uppercaseInput = uppercaseCharacters.charAt(Math.floor(Math.random() * uppercaseCharacters.length));
    passwordArray.push(uppercaseInput);
    console.log(passwordArray)
    } else {
    uppercaseConfirm = false;
  }

  if (numericalConfirm === true && passwordArray.length < passwordLength) {
    let numericalInput = numericalCharacters.charAt(Math.floor(Math.random() * numericalCharacters.length));
    passwordArray.push(numericalInput);
    console.log(passwordArray)
    } else {
    numericalConfirm = false;
  }

  if (specialConfirm === true && passwordArray.length < passwordLength) {
    let specialInput = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    passwordArray.push(specialInput);
    console.log(passwordArray)
    } else {
    specialConfirm = false;
  }
}  


}


 



}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);