// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// This is where the code I added starts!
// This is where the function to everything starts by declaring the different character arrays
function generatePassword() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$%^&*()-_=+[]{}|;:',.<>/?`~";
// asks for the password length
  let passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");
// makes sure the password is between 8 and 128 characters
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");
  }
// asks what kinds of characters to use when generating the password
  let includeLower = confirm("Include lowercase characters?");
  let includeUpper = confirm("Include uppercase characters?");
  let includeNumbers = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");
// checks if atleast one of the character types is selected
  while (!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
    alert("At least one character type must be selected.");
    includeLower = confirm("Include lowercase characters?");
    includeUpper = confirm("Include uppercase characters?");
    includeNumbers = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }
// generates the available characters based on what the user chose
  let availableChars = "";
  if (includeLower) availableChars += lower;
  if (includeUpper) availableChars += upper;
  if (includeNumbers) availableChars += numbers;
  if (includeSpecial) availableChars += special;
// officially generates the password
  let generatedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars[randomIndex];
  }
// returns the finalized generated password
  return generatedPassword;
}
