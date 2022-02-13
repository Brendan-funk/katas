const makeCase = function(string, caseType) {

  //declaring the order array and the return string
  let order = [];
  let returnString = string;

  //check if the caseType is an array if so
  if (caseType instanceof Array) {

    //looping through the caseType array 3 times with the different priorities for each pushing them in the right order to the order array
    for (let cases of caseType) {
      if (cases === 'camel' || cases === 'pascal' || cases === 'snake' || cases === 'kebab' || cases === 'title') {
        order.push(cases);
      }
    }
    for (let cases of caseType) {
      if (cases === 'vowel' || cases === 'consonant') {
        order.push(cases);
      }
    }
    for (let cases of caseType) {
      if (cases === 'upper' || cases === 'lower') {
        order.push(cases);
      }
    }
  } else {
    order.push(caseType);
  }

  //applying the desired effects in the right order
  for (let i = 0; i < order.length; i++) {
    switch (order[i]) {
    case 'camel':
      returnString = camel(returnString);
      break;
    case "pascal":
      returnString = pascal(returnString);
      break;
    case "snake":
      returnString = snake(returnString);
      break;
    case "kebab":
      returnString = kebab(returnString);
      break;
    case "title":
      returnString = title(returnString);
      break;
    case "vowel":
      returnString = vowel(returnString);
      break;
    case "consonant":
      returnString = consonant(returnString);
      break;
    case "upper" :
      returnString = upper(returnString);
      break;
    case "lower" :
      returnString = lower(returnString);
      break;
    }
  }
  
  //return the new string
  return returnString;
};
const camel = function(string) {

  //declaring return string
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


const pascal = function(string) {

  //declaring the return string
  let returnString = '';

  //have the first letter capatalized
  returnString += string.charAt(0).toUpperCase();

  //loop through string
  for (let i = 1; i < string.length; i++) {

    //check if character is a space
    if (string.charAt(i) === " ") {
      returnString += string.charAt(i);
    }
  }
  //return the string
  return returnString;
};


const snake = function(string) {
  //replacing spaces with an underscore
  return string.replace(/\s/g, '_');
};


const kebab = function(string) {
  //replacing spaces with a hyphon
  return string.replace(/\s/g, '-');
};


const title = function(string) {

  //declaring return string
  let returnString = '';

  //have the first letter capatalized
  returnString += string.charAt(0).toUpperCase();

  //loop through string
  for (let i = 1; i < string.length; i++) {

    //check if character is a space
    if (string.charAt(i) === " ") {

      //give the next character as a capital and  add the space
      returnString += string.charAt(i) + string.charAt(i + 1).toUpperCase();

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

const vowel = function(string) {

  //declaring return string and vowel array
  let returnString = '';
  const vowels = ['a','e','i','o','u'];

  //loop through the string
  for (let i = 0; i < string.length; i++) {

    //if the char is a vowel change all of that vowel to upper case
    if (vowels.includes(string.charAt(i))) {
      returnString = string.replace(string.charAt(i), string.charAt(i).toUpperCase());

      //and add the new capitalized vowels to the old string so we dont duplicate it
      string = returnString;
    }
  }

  //return new string
  return returnString;
};

const consonant = function(string) {

  //declaring return string and vowel array
  let returnString = '';
  const vowels = ['a','e','i','o','u'];

  //loop through the string
  for (let i = 0; i < string.length; i++) {

    //if the char is not a vowel change all of the consonants of that char to uppercase
    if (!vowels.includes(string.charAt(i))) {
      returnString = string.replace(string.charAt(i), string.charAt(i).toUpperCase());

      //add the new capitilized consonants to the old string so the code doesnt run again for a duplicate letter
      string = returnString;
    }
  }
  
  //return the string
  return returnString;
};

const upper = function(string) {
  //make the string upper case
  return string.toUpperCase();
};

const lower = function(string) {
  //make the string lower case
  return string.toLowerCase();
};

//test cases
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
