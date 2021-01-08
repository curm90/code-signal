// https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo

function digitDegree(n) {
  // place to store the changes
  let changes = 0;
  // place to store the new sum - 0 - 10
  let sum = 0;
  // turn n into an array - ['9', '1'] - ['1', '0']
  let arr = n.toString().split('');
  // while arr.length > 1
  while (arr.length > 1) {
    // iterate over the array
    for (const currentNum of arr) {
      // new number is equal to new number + current num changed to a number
      sum = sum + Number(currentNum);
    }
    // increment changes
    changes++;
    // update the array with the new sum
    arr = sum.toString().split('');
    // reset sum
    sum = 0;
  }
  // return changes
  return changes;
}

function digitDegree(n) {
  let changes = 0;

  while (n.toString().length > 1) {
    n = n
      .toString()
      .split('')
      .reduce((total, current) => +total + +current);

    changes++;
  }
  return changes;
}

console.log(digitDegree(5), 0);
console.log(digitDegree(100), 1);
console.log(digitDegree(91), 2);
console.log(digitDegree(99), 2);
