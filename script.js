// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function generating and printing password onto the window object.
function writePassword() {
  
  // function creating prompt for amount of characters required
  function passwordLength() {
    passwordLength = window.prompt(
    "Please enter the amount of characters you would like in your password between 8 and 128.");
    // passwordLength validation
    passwordLength = Math.floor(parseInt(passwordLength));
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("You did not pick a valid option. Please try again");
      passwordLength();
    } else {
      charSelect();
      }
  }
  passwordLength();


  function charSelect() {
    //object with banks for differect character types
    chars = {
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lower: "abcdefghijklmnopqrstuvwxyz",
      num: "1234567890",
      spec: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"',
    }
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

    // Build password with for loop
    function generatePassword() {
      password = "";
      for (var i=0; i < passwordLength; i++) {
      var randomNum = Math.floor(Math.random() * charBank.length);
      password += charBank.substring(randomNum, randomNum + 1);
      }

      // Write password to the #password input
      passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    generatePassword();
  }
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

   $.ajax({
        url: 'https://api.getsongbpm.com/',
        type: 'GET',
        dataType: 'json',
        headers: {
            'X-API-KEY': '4b52f9441e5448b15c564ac30bda81a3',
        },
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
           console.log(result);
        },
        error: function (error) {
            console.log(error);
        }
      });