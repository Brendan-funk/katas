const camelCase = function(string) {

  //declare string to return
  let returnString = '';

  //loop through string
  for (let i = 0; i < string.length; i++) {

    //check if character is a space
    if (string.charAt(i) === " ") {

      //give the next character as a capital and do not add the space
      returnString += string.charAt(i + 1).toUpperCase();

      //additional incriment to stop capital letter from repeating
      i++;
    } else {

      //add char to return string
      returnString += string.charAt(i);
    }
  }

  //return the new string
  return returnString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
