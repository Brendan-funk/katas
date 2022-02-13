const numberOfVowels = function(data) {

  //declaring count variable and turning string entered to all uppercase to cut down on checks
  let count = 0;
  let sentence = data.toUpperCase();

  //loop through string
  for (let i = 0; i < data.length; i++) {

    //if the character at i is a vowel counter increases
    if (sentence.charAt(i) === 'A' || sentence.charAt(i) === 'E' || sentence.charAt(i) === 'I' || sentence.charAt(i) === 'O' || sentence.charAt(i) === 'U') {
      count++;
    }
  }

  //return the amount of vowels
  return count;
};

//test cases

//should output 3
console.log(numberOfVowels("orange"));

//should output 5
console.log(numberOfVowels("lighthouse labs"));

//should output 5
console.log(numberOfVowels("aeiou"));