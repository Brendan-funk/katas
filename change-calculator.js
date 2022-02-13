const calculateChange = function(total, cash) {

  //declaring the change needed and the denominations object
  let change = cash - total;
  let denominations = {
    
  };

  //the variables for name and worth of the different coins and bills
  const money = ["twentyDollar","tenDollar","fiveDollar","twoDollar","oneDollar","quarter","dime","nickel","penny"];
  const values = [2000,1000,500,200,100,25,10,5,1];

  //loop through the values array
  for (let i = 0; i < values.length; i++) {

    //check if the value can be divided by the change remaining
    let howMany = Math.floor(change / values[i]);

    //if the value can be put into the change remaining
    if (howMany > 0) {

      //create new trait of object with the correct name and how many of that coin we need
      denominations[money[i]] = howMany;

      //update the change remaining to be the left over
      change = change % values[i];
    }
    
  }
  //return the object
  return denominations;
};


//test cases
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));