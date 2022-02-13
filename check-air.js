const checkAir = function(samples, threshold) {

  //declare counter for dirty air
  let dirtyCount = 0;

  //loop through sample array to count dirty
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtyCount++;
    }
  }

  //check the air
  if (dirtyCount === 0) {
    return "Clean";
  } else if (dirtyCount / samples.length > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

//test cases

//should output Polluted
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

//should output Polluted
console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));


//should output Clean
console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));