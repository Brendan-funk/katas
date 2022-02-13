const repeatNumbers = function(arr) {

  //declaring string to return
  let string = "";

  //loop through the arrays in the 2d array
  for (let i = 0; i < arr.length; i++) {
    
    //add the number the amount of times specified in the array to the string
    for (let j = 0; j < arr[i][1]; j++) {
      string += arr[i][0];
    }
    
    //if there is more we add a comma and a space for spacing
    if (arr.length > i + 1) {
      string += ", ";
    }
  }

  //return string
  return string;
};

//test cases
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


