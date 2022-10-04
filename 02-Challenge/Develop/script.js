

var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var charLength = 8;
var array = [];

var choices = {
  charLength: charLength,
  addUpperCase: false,
  addLowerCase: false,
  addSpecialCharacter: false,
  addNumbers: false,
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptUser() {
  var passwordLength = parseInt(prompt('How long would you like you password'));

  if(!passwordLength ||( passwordLength<8 || passwordLength>128)) {
    alert('Please enter a valid length 8-128');
    promptUser()
    return
  }

  var includespecialCharacters = confirm('Would you like to include a special character');
  var includelowerCase = confirm('Would you like to include a lower case letter');
  var includeupperCase = confirm('Would you like to include a upper case letter');
  var includenumbers = confirm('Would you like to include a number');
  if(!includespecialCharacters&& !includelowerCase && !includeupperCase && !includenumbers){
    alert('Please choose one or more characters');
    promptUser()
    return
  }
  var options = {
    passwordLength: passwordLength,
    includelowerCase: includelowerCase,
    includeupperCase: includeupperCase,
    includespecialCharacters: includespecialCharacters,
    includenumbers: includenumbers
  }
  return options
}

function generatePassword() {
var possibleCharacters = []
var options = promptUser()
if(options.includelowerCase){
  possibleCharacters = possibleCharacters.concat(lowerCase)

}
if(options.includeupperCase){
  possibleCharacters = possibleCharacters.concat(upperCase)
}
if(options.includespecialCharacters){
  possibleCharacters = possibleCharacters.concat(specialCharacter)
}
if(options.includenumbers){
  possibleCharacters = possibleCharacters.concat(numbers)
}
console.log(possibleCharacters)
var password = '';
for(var i=0; i<options.passwordLength; i++){
  var randomIndex = Math.floor(Math.random()*possibleCharacters.length)
  password += possibleCharacters[randomIndex] 
  console.log(possibleCharacters[randomIndex])
}
return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
