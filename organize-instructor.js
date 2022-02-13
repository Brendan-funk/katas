const organizeInstructors = function(instructors) {

  //declaring return object
  let courseInstructors = {};

  //loop through the instructors
  for (let instructor of instructors) {

    //if the course doesnt already exist in the return object
    if (!courseInstructors[instructor.course]) {

      //make it and add the instructors name
      courseInstructors[instructor.course] = [];
      courseInstructors[instructor.course].push(instructor.name);
    } else {
      courseInstructors[instructor.course].push(instructor.name);
    }
  }

  //return the object
  return courseInstructors;
};


//test cases
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
