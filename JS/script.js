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

  if (length >= 8 && length <= 128) {
    return length;
  } else alert("please enter valid password");
};

const getPasswordCriteria = () => {
  //Declare an empty array where we can add values as they are selected
  let includedPasswordValues = [];

  //Declare string values for different types of characters
  const lowerCaseValues = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const upperCaseValues = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const specialCharacterValues = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "_",
    "`",
    "{",
    "|",
    "}",
  ];

  const numberValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //Use confirms to find out which characters are wanted
  const useLowerCase = confirm("Would you like lower case characters?");

  if (useLowerCase) {
    //includedPasswordValues.push(lowerCaseValues);
    includedPasswordValues = includedPasswordValues.concat(lowerCaseValues);
  }

  const useUpperCase = confirm("Would you like upper case characters?");

  if (useUpperCase) {
    //includedPasswordValues.push(upperCaseValues);
    includedPasswordValues = includedPasswordValues.concat(upperCaseValues);
  }

  const useSpecials = confirm("Would you like Special characters?");

  if (useSpecials) {
    //includedPasswordValues.push(specialCharacterValues);
    includedPasswordValues = includedPasswordValues.concat(
      specialCharacterValues
    );
  }

  const useNumbers = confirm("Would you like numbers?");

  if (useNumbers) {
    //includedPasswordValues.push(numberValues);
    includedPasswordValues = includedPasswordValues.concat(numberValues);
  }

  console.log("abcd: " + includedPasswordValues);
  //Return the array with the strings of characters requested
  return includedPasswordValues;
};

const createRandomPassword = (passwordLength, criteria) => {
  console.log(passwordLength, criteria);
  let password = "";

  //for loop will be used to loop over the criteria array of strings and add one character from each to pw
  for (let i = 0; i < passwordLength; i++) {
    console.log("index being checked in for loop: ", i);
    let characters = criteria[i];
    console.log("Characters:", characters);

    //Use Math.floor to round down to lowest integer
    //Use Math.Random to get a random number between 0 and 1
    let randomNumber = Math.floor(Math.random() * criteria.length);
    console.log("Random index to add to pw:", randomNumber);

    //Use the random number generated above to add a random character to the password string
    password += criteria[randomNumber];
    console.log(password);
  }

  const allCharacters = criteria.join();
  console.log("All:", allCharacters);

  //   let i = 0;
  //   while (i < length) {
  //     console.log(i);
  //     i += 1;
  //   }

  //Use a while loop -

  console.log("Final password after loop:", password);
  return password;
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
