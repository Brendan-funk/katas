//necessary packages
let prompt = require("prompt-sync")();

//game function
const guessingGame = function() {

  //getting our random number and declaring answer and the guesses array also a booleon of was guessed before
  const number = Math.floor(Math.random() * 101);
  let guesses = [];
  let answer;
  let wasGuessed = false;

  //while the user has not guessed the number
  while (answer !== number) {

    //get the user input
    answer = prompt("Guess a number between 0 - 100: ");

    //check if the input is a number and is in the disired range
    if (isNaN(answer) || answer < 0 || answer > 100) {
      console.log("Please enter a number between 0 and 100.");
    } else {

      //loop through the past guesses
      for (let i = 0; i < guesses.length; i++) {

        //if the number has been guessed before, print error message and change was guessed to true
        if (guesses[i] === answer) {
          console.log("Sorry you have already guessed that number");
          wasGuessed = true;
        }
      }

      //if the number was not guessed before, add it to the guessed array
      if (!wasGuessed) {
        guesses.push(answer);
      } else {
        wasGuessed = false;
      }

      //if the number is too big or small we print the response
      if (answer > number) {
        console.log("Too High!");
      } else if (answer < number) {
        console.log("Too Low!");
      } else {
        break;
      }
    }
  }

  //return the number of tries and what the number to guess was
  return ("Congrats, the number was " + number + ". It took you " + guesses.length + " tries!");
};

//test case
console.log(guessingGame());