const multiplicationTable = function(maxValue) {

  //declare string to return
  let string = '';

  //loop through the numbers from 1 to the max value twice
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {

      //if j is not the same as max value
      if (j < maxValue) {

        //multiply i by j and add it to the string with a space
        string += i * j + " ";
      } else {

        //multiply i by j and add it to the string with a new line
        string += i * j + "\n";
      }
    }
  }

  //return the string
  return string;
};

//test cases
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));