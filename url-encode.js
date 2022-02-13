const urlEncode = function(text) {

  //trimming white space off front and back and defining our replacement for ' ' and our output string
  let string = text.trim();
  const url = '%20';
  let output = '';

  //loop through inputted string
  for (let i = 0; i < string.length; i++) {

    //if the char is ' '
    if (string.charAt(i) === ' ') {
      
      //add the '%20
      output = output + url;
    } else {

      //otherwise just add the char to the output string
      output = output + string.charAt(i);
    }
  }

  //return new string
  return output;
};

//test cases

//should output "Lighthouse%20Labs"
console.log(urlEncode('Lighthouse Labs'));

//should output "%Lighthouse%20Labs"
console.log(urlEncode(' Lighthouse Labs '));

//should output "blue%20is%20greener%20than%20purple%20for%20sure"
console.log(urlEncode("blue is greener than purple for sure"));