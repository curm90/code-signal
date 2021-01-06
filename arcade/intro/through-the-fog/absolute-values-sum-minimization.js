// https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq

function absoluteValuesSumMinimization(a) {
  // place to store the difference
  let difference = Infinity;
  // place to store current result
  let result;

  // iterate over array
  for (let i = 0; i < a.length; i++) {
    let currentNum = a[i];
    // place to store the current sum
    let sum = 0;

    // iterate for each item in the array
    for (let j = 0; j < a.length; j++) {
      let nextNum = a[j];
      // perform math to evaluate the sum
      sum += Math.abs(currentNum - nextNum);
    }

    // if sum is less than difference
    if (sum < difference) {
      // set the difference to sum
      difference = sum;
      // set result to currentNum
      result = currentNum;
    }
  }

  // return result
  return result;
}

function absoluteValuesSumMinimization(a) {
  return a[Math.floor((a.length - 1) / 2)];
}

function absoluteValuesSumMinimization(a) {
  return a[Math.ceil(a.length / 2) - 1];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]), 4);
console.log(absoluteValuesSumMinimization([2, 3]), 2);
console.log(absoluteValuesSumMinimization([1, 1, 3, 4]), 1);
console.log(absoluteValuesSumMinimization([23]), 23);
