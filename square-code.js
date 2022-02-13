const squareCode = function(message) {

  //removing spaces from the input and declaring the array and max value
  const text = message.replace(/\s/g, "");
  let arr = [];
  let max = Math.ceil(Math.sqrt(text.length));

  //making an empty string in each spot off the array
  for (let i = 0; i < max; i++) {
    arr[i] = '';
  }

  //declaring the output and counter
  let output = "";
  let counter = 0;

  //loop through the text
  for (let i = 0; i < text.length; i++) {

    //adding the current character to the string in the array
    arr[counter] += text.charAt(i);

    //move to the next array
    counter++;

    //if the counter is at our max limit we reset to the first string in the array
    if (counter === max) {
      counter = 0;
    }
  }

  //turn the array into a string
  for (let i = 0; i < arr.length; i ++) {
    output += arr[i] + " ";
  }

  //return the coded string
  return output;
};

//test cases
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
