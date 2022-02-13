const urlDecode = function(text) {

  //declaring return obj, arrays for the traits and content, a counter and book mark and the string with %20 replaced with a space
  let obj = {};
  let trait = [];
  let content = [];
  let counter = 0;
  let bookmark = 0;
  let string = text.replace(/%20/g, " ");
 

  //loop through the string
  for (let i = 0; i < string.length; i++) {

    //if the character is an = everything after the bookmark to the current character becomes a trait
    if (string.charAt(i) === '=') {
      trait[counter] = string.substring(bookmark,i);
      bookmark = i + 1;
    }

    //if the character is an & everything after the bookmark to the current character becomes a content for the trait
    if (string.charAt(i) === '&') {
      content[counter] = string.substring(bookmark,i);
      bookmark = i + 1;

      //increase the counter
      counter++;
    }
  }

  //get the last content
  content[counter] = string.substring(bookmark);

  //loop through the arrays adding them to the objective
  for (let i = 0; i < trait.length; i ++) {
    obj[trait[i]] = content[i];
  }

  //return the object
  return obj;
};


//test cases
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
