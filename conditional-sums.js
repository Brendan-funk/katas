const conditionalSum = function(values, condition) {
  
  //declaring variables, if no condition is met by the array it will return zero
  let sum = 0;

  //checking if the condition given is even
  if (condition === 'even' || condition === 'Even') {

    //loop through array
    for (let i = 0; i < values.length; i++) {

      //if the number is even, add it to the sum varaible
      if (values[i] % 2 === 0) {
        sum += values[i];
      }
    }
  } else if (condition === 'odd' || condition === 'Odd') {

    //loop through array
    for (let i = 0; i < values.length; i++) {

      //if the number is odd, add it to the sum variable
      if (values[i] % 2 === 1) {
        sum += values[i];
      }
    }
  }

  //return sum
  return sum;
};

//test cases

//should output 6
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));

//should output 9
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));

//should output 144
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));

//should output 0
console.log(conditionalSum([], "odd"));