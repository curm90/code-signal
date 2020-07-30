// https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE

function arrayMaximalAdjacentDifference(arr) {
  // place to store the max difference
  let maxDiff = 0;
  // iterate over the array
  for (let i = 0; i < arr.length - 1; i++) {
    // we check the difference between current num and next num
    let sum = Math.abs(arr[i] - arr[i + 1]);
    // if that value is greater than the max difference variable
    if (sum > maxDiff) {
      // set set the max diff to that number
      maxDiff = sum;
    }
  }
  // return max diff
  return maxDiff;
}

function arrayMaximalAdjacentDifference(arr) {
  // place to store the max difference
  let maxDiff = 0;
  // iterate over the array
  for (let i = 0; i < arr.length - 1; i++) {
    // we check the difference between current num and next num
    const diff = findDifference(arr[i], arr[i + 1]);
    // if that value is greater than the max difference variable
    if (diff > maxDiff) {
      // set set the max diff to that number
      maxDiff = diff;
    }
  }
  // return max diff
  return maxDiff;
}

function findDifference(a, b) {
  if (a < b) {
    return b - a;
  } else if (a > b) {
    return a - b;
  }
  return 0;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]), 3);
console.log(arrayMaximalAdjacentDifference([1, 1, 1, 1]), 0);
console.log(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2]), 7);
console.log(arrayMaximalAdjacentDifference([10, 11, 13]), 2);
