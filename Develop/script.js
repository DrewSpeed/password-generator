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
  numberPrompt = window.prompt(
    "Please enter the amount of characters you would like in your password between 8 and 128.");
    // make numberprompt an integer
    numberPrompt = Math.floor(parseInt(numberPrompt));
    if (numberPrompt < 8 || numberPrompt > 128 || isNaN(numberPrompt)) {
      window.alert("You did not pick a valid option. Please try again");
      passwordLength();
    } else {
      charSelect();
    }
  };
  passwordLength();



  function charSelect() {
    //object with banks for differect character types
    chars = {
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lower: "abcdefghijklmnopqrstuvwxyz",
      num: "1234567890",
      spec: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"'
    }
    // Empty character bank
    charBank = "";
    // prompts and statements adding chars to charBank
    upperConf =   confirm("Would you like for the password to contain UPPERCASE letters?");
    if (upperConf) {
      charBank += chars.upper;
    }

    lowerConf =   confirm("Would you like for the password to contain LOWERCASE letters?");
    if (lowerConf) {
      charBank += chars.lower;
    } 

    numConf = confirm("Would you like for the password to contain NUMBERS?");
    if (numConf) {
      charBank += chars.num;
    }
    specConf = confirm("Would you like for the password to contain SPECIAL CHARACTERS?")
    if (specConf) {
      charBank += chars.spec;
    }
  }


  console.log(numberPrompt);
  //function characterSelector(); {
    // object with variables for different character types
  //}

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
