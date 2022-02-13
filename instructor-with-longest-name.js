const instructorWithLongestName = function(instructors) {

  //declaring the index of the longest name starting at the first object
  let longestIndex = 0;

  //loop through array
  for (let i = 1; i < instructors.length; i++) {

    //if the instructors name is longer than our current longest name
    if (instructors[i]["name"].length > instructors[longestIndex]["name"].length) {

      //the index gets saved as the new longest
      longestIndex = i;
    }
  }

  //return the object with the longest name
  return instructors[longestIndex];
};

//test cases

//should output {name: "Jeremiah", course: "Web"}
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

//should output {name: "Domascus", course: "Web"}
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));