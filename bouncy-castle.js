//declaring constant of Pi
const PI = 3.14159;

//formula for volume of sphere
const sphereVolume = function(radius) {
  return (4 / 3) * PI * (radius ** 3);
};

//test case
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);


//formula for volume of a cone
const coneVolume = function(radius, height) {
  return PI * (radius ** 2) * (height / 3);
};

//test case
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

//formula for volume of a prism
const prismVolume = function(height, width, depth) {
  return height * (width * depth);
};

//test case
console.log(prismVolume(3, 4, 5) === 60);

//total volume function
const totalVolume = function(solids) {

  //declaring total volume
  let total = 0;

  //loop through array of shapes
  for (let solid of solids) {

    //if the shape given is a cone
    if (solid["type"] === 'cone') {

      //add the coneVolume to the total
      total += coneVolume(solid["radius"],solid["height"]);
    } else if (solid["type"] === 'sphere') {

      //add the sphereVolume to the total
      total += sphereVolume(solid["radius"]);
    } else if (solid["type"] === 'prism') {
      //add the prismVolume to the total
      total += prismVolume(solid["height"],solid["width"],solid["depth"]);
    }
  }

  //return total
  return total;
};


//test case

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);