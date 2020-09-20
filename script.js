///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's


// Creating a global var for the password.
let password ='';

const generatePassword = () => {

  // create 3-4 arrays/ list of characters for the types of charactors asked in the prompt messages below.
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = ['1','2','3','4','5','6','7','8','9','0'];
  const specialCharacters ='!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  const getRandomCharacter = arr => {
    // Creating var for a random number and a var to hold to random number in the specific array/list of characters
    let randomNumber = Math.floor(Math.random() * arr.length)
    let randomCharacter = arr[randomNumber];
    // If the the passwordlength asked for is less than the current testPassword than 
    // add the generated character if not ends of function.
    if (passwordLength > testPassword.length){
      testPassword += randomCharacter;
    }
    
  }


  // Creating a local test password to push to the global password var
  let testPassword = '';

  

  // Prompt user for password crriteria length between 8 - 128 characters
  const passwordPromt = prompt('How long would you like your password to be? (must be between 8-128 characters long.)');
  let passwordLength = parseInt(passwordPromt);

  // validates users input 
  if (typeof passwordLength === 'number' && passwordLength >= 8 && passwordLength <= 128){
    
    // Checking the lenght of the users desired passwrod length
    console.log(  passwordLength );
    
    
    // Asks the user in a series of confirm prompts if they want the following criteia in their passwrod.
    let containLowerCase; 
    let containUpperCase; 
    let conatinNumbers; 
    let containSpecialCharacters;

/// add validation for confirm messages make sure at least one is true...
    const passwordCriteria = () => {
      containLowerCase = confirm("Click okay if you would like your password to conatin Lower Case Letters.");
      containUpperCase = confirm('Would you like your password to contain Upper Case Letters');
      conatinNumbers = confirm('Would you like your password to contain Numbers');
      containSpecialCharacters = confirm('Would you like your password to contain Specail Characters');
    }
    passwordCriteria();

    // validating the confirms promts if none are true than ask agian.
    if( !containLowerCase && !containUpperCase && !conatinNumbers && !containSpecialCharacters) {
      alert('You must pick a password criteria.')
      passwordCriteria();
    }


    for (var i = 0; testPassword.length < passwordLength; i++){
      // user wants passWord to contain lowercase letters, ...
      if(containLowerCase){
        getRandomCharacter(letters);
      }
  
      // UPPERCASE letters,
      if(containUpperCase) {
        getRandomCharacter(capitalLetters);
      }
      // Numbers,
      if(conatinNumbers) {
        getRandomCharacter(numbers);
      }
      // Special characters
      if (containSpecialCharacters) {
        getRandomCharacter(specialCharacters);
      }
    }




  // This alerts if the user didn't enter a valid answer in the prompt message.
  } else {
    alert("Error: please enter number from 8 - 128")
  }
    
  // Checking the lenght of the generated password
  console.log( testPassword.length )
  console.log('-----------------------');

  //  return the new password end of the function.
  return testPassword;
}







///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
