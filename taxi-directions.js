const blocksAway = function(directions) {
  //declaring the object to return
  let pos = {
    east: 0,
    north: 0,
    
  };

  //declaring our oriantation and setting it to either north or east by our first instruction
  let oriantation = "";
  if (directions[0] === "right") {
    oriantation = "east";
  } else if (directions[0] === "left") {
    oriantation = "north";
  }
  
  //looping through the rest of the array
  for (let i = 1; i < directions.length; i++) {

    //if the index of the loop is odd
    if (i % 2 === 1) {

      //depending on the oriantation the north or east trait of the position object gets increased or decreased by the amount specified by the instructions
      switch (oriantation) {

      //if north, north gets increased
      case "north":
        pos['north'] += directions[i];
        break;

      //if east, east gets increased
      case "east":
        pos['east'] += directions[i];
        break;

        //if south, north gets decreased
      case "south":
        pos['north'] -= directions[i];
        break;

        //if west, east gets decreased
      case "west":
        pos['east'] -= directions[i];
        break;
      }
    } else {

      //depending on the oriantation of our taxi the left or right changes it
      switch (oriantation) {

      //if north left would send it west and right would send it east
      case "north":
        if (directions[i] === 'left') {
          oriantation = 'west';
        } else {
          oriantation = 'east';
        }
        break;
      //if east left would send it north and right would send it south
      case "east":
        if (directions[i] === 'left') {
          oriantation = 'north';
        } else {
          oriantation = 'south';
        }
        break;

      //if south left would send it east and right would send it west
      case "south":
        if (directions[i] === 'left') {
          oriantation = 'east';
        } else {
          oriantation = 'west';
        }
        break;
      //if west left would send it south and right would send it north
      case "west":
        if (directions[i] === 'left') {
          oriantation = 'south';
        } else {
          oriantation = 'north';
        }
        break;
      }
    }
  }

  //return the position object
  return pos;
};

//test cases
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
