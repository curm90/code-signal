// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/scG8AFsPuqQGx8Qjf

function appleBoxes(k) {
  // place to store the yellow apples
  let redApples = 0;
  // place to store red apples
  let yellowApples = 0;
  // place to store the smallest box size initialized at 1
  let boxSize = 1;
  // iterate from boxSize up to k
  while (boxSize <= k) {
    // if current number is odd
    if (boxSize % 2 !== 0) {
      // add total to yellow apples - add boxSize to current number multiplied by itself
      yellowApples += boxSize * boxSize;
      boxSize++;
      // else
    } else {
      // add total to red apples
      redApples += boxSize * boxSize;
      boxSize++;
    }
  }
  // return yellow - red apples
  return redApples - yellowApples;
}

function appleBoxes(k) {
  let redApples = 0;
  let yellowApples = 0;

  for (let i = 1; i <= k; i++) {
    if (i % 2 !== 0) {
      yellowApples += i * i;
    } else {
      redApples += i * i;
    }
  }
  return redApples - yellowApples;
}

function appleBoxes(k) {
  let redApples = 0;
  let yellowApples = 0;

  for (let i = 1; i <= k; i++) {
    i % 2 !== 0 ? (yellowApples += i * i) : (redApples += i * i);
  }
  return redApples - yellowApples;
}

console.log(appleBoxes(5), -15);
console.log(appleBoxes(15), -120);
console.log(appleBoxes(36), 666);
