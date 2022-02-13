const sumLargestNumbers = function(data) {

  //declaring variables
  let num1, num2;

  //checking if data inputed is an array
  if (data.length <= 1) {
    return 'Error please enter more than one number';
  } else {
    
    //check which of the first two elements are bigger and setting the bigger one to the variable num1
    if (data[0] > data[1]) {
      num1 = data[0];
      num2 = data[1];
    } else {
      num1 = data[1];
      num2 = data[0];
    }
  
    //checking if the array is only two numbers, if so output the sum of those two numbers
    if (data.length === 2) {
      return num1 + num2;
    } else {

      //loop through the array starting from the third value
      for (let i = 2; i < data.length; i++) {

        //if the number is bigger than the previous biggest number
        if (data[i] > num1) {

          //the previous biggest number becomes num2 and the new biggest number becomes num1
          num2 = num1;
          num1 = data[i];
        } else if (data[i] > num2) {
          num2 = data[i];
        }
      }
    }

    //return the sum of the two biggest numbers
    return num1 + num2;
  }
};




//test cases

//should be 11
console.log(sumLargestNumbers([1, 10]));

//should be 5
console.log(sumLargestNumbers([1, 2, 3]));

//should be 126
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));