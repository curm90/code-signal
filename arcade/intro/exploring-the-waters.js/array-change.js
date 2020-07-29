// // https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg

function arrayChange(arr) {
  // place to store the moves
  let moves = 0;
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // if next num is less than or equal to current num
    if (arr[i + 1] <= arr[i]) {
      // add the current num - next num + 1 to moves
      moves += arr[i] - arr[i + 1] + 1;
      // set next num to equal current num plus 1
      arr[i + 1] = arr[i] + 1;
    }
  }
  // return moves
  return moves;
}

function arrayChange(arr) {
  // place to store the moves
  let moves = 0;
  // place to store a copy of the input array
  let copy = [...arr];
  // iterate over the array
  for (let i = 0; i < copy.length; i++) {
    // if next num is less than or equal to current num
    if (copy[i + 1] <= copy[i]) {
      // add the current num - next num + 1 to moves
      moves += copy[i] - copy[i + 1] + 1;
      // set next num to equal current num plus 1
      copy[i + 1] = copy[i] + 1;
    }
  }
  // return moves
  return moves;
}

console.log(arrayChange([1, 1, 1]), 3);
console.log(arrayChange([6, 2, 10]), 5);
console.log(arrayChange([2, 1, 10, 1]), 12);
console.log(arrayChange([-1000, 0, -2, 0]), 5);
