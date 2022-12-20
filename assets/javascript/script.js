//Array of characters that can be included in the password
var secondaryCharacters = ['!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','\`','{','|','}','~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//Used to get a random characters from the array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Function for password options 
function getPasswordOptions() {

  //Variables and prompts that will confirm password options 
  var length = parseInt(
    prompt('How many characters will this password contain? Character length must be between 8-128 characters long.'));
   
    var hasUpperCasedLetters = confirm(
      'Must click OK to include uppercase Characters.'
    );

    var hasLowerCasedLetters = confirm(
      'Must click OK to include lowercase characters.'
    );

    var hasSecondaryCharacters = confirm(
      'Must click OK to include special characters.'
    );

    var hasNumbers = confirm(
      'Must click OK to include numeric characters.'
    );

    //object to store user input 
    var passwordOptions = {
      length: length,
      hasUpperCasedLetters: hasUpperCasedLetters,
      hasLowerCasedLetters: hasLowerCasedLetters,
      hasSecondaryCharacters: hasSecondaryCharacters,
      hasNumbers: hasNumbers,   
    };

    return passwordOptions;
}


//Function to generate password  
function generatePassword() {
  var options = getPasswordOptions();
  //Variable to store password as it's being concatenated 
  var result = [];

  //Array to store types of charcters and all characters to include in password 
  var possibleCharacters = []; 
  var guaranteedCharacters = [];

  //Statement that adds characters into array of possible charcaters and pushes new random characters to guaranteedCharacters
  if (options.hasUpperCasedLetters) {
    possibleCharacters = possibleCharacters.concat(upperCasedLetters);
    guaranteedCharacters.push(getRandom(upperCasedLetters));
  }

  if (options.hasLowerCasedLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedLetters);
    guaranteedCharacters.push(getRandom(lowerCasedLetters));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.hasSecondaryCharacters) {
    possibleCharacters = possibleCharacters.concat(secondaryCharacters);
    guaranteedCharacters.push(getRandom(secondaryCharacters));
  }

  //For loop over the password length, selecting random index will iterate the password.
  for (var i = 0; i<options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  //For loop to make sure one of each character is in the password 
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  //returns the result of the password 
  return result.join('');
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