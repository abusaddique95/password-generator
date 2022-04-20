// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  const length = parseInt(
    prompt("What length would you like your password to be?")
  );

  // Research best way to check if variable is a number
  // Add conditional where we alert user that it should be a number typed

  // Conditional to check if length is less than 8 characters
  // Alert user that should be at least 8 if lower than 8

  // Same as above but for less than 128

  return length;
};

const getPasswordCriteria = () => {
  //Declare an empty array where we can add values as they are selected
  let includedPasswordValues = [];

  //Declare string values for different types of characters
  const lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";

  const upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const specialCharacterValues = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  const numberValues = "0123456789";

  //Use confirms to find out which characters are wanted
  const useLowerCase = confirm("Would you like lower case characters?");

  if (useLowerCase) {
    includedPasswordValues.push(lowerCaseValues);
  }

  const useUpperCase = confirm("Would you like upper case characters?");

  if (useUpperCase) {
    includedPasswordValues.push(upperCaseValues);
  }

  const useSpecials = confirm("Would you like Special characters?");

  if (useSpecials) {
    includedPasswordValues.push(specialCharacterValues);
  }

  const useNumbers = confirm("Would you like numbers?");

  if (useNumbers) {
    includedPasswordValues.push(numberValues);
  }

  console.log(includedPasswordValues);
  //Return the array with the strings of characters requested
  return includedPasswordValues;
};

const createRandomPassword = () => {
  return "kdUE284(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
