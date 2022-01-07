// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // prompt for amount of characters requested between 8 and 128
  function passwordLength() {
  var numberPrompt = window.prompt(
    "Please enter the amount of characters you would like in your password between 8 and 128.");
    // make numberprompt an integer
    var numberPrompt = Math.floor(parseInt(numberPrompt));
    if (numberPrompt < 8 || numberPrompt > 128 || isNaN(numberPrompt)) {
      window.alert("You did not pick a valid option. Please try again");
      passwordLength();
    }
  };
  passwordLength();
    // prompts for including lowercase, uppercase, numberic, and special characters


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
