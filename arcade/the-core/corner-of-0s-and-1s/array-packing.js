// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/KeMqde6oqfF5wBXxf

function arrayPacking(arr) {
  // place to store the array of binarys
  const binaryArr = [];
  // iterate over the array
  for (const num of arr) {
    // for each number convert it to a binary string
    // and add it to front of binaryArr
    binaryArr.unshift(convertDecimalToBinary(num));
  }

  // join into one string
  const binStr = binaryArr.join('');

  // parse that binary number and return it
  return parseInt(binStr, 2);
}

// a decimal to binary function
function convertDecimalToBinary(num) {
  return num.toString(2).padStart(8, '0');
}

// ##### OTHER SOLUTIONS I FOUND COOL ######
function arrayPacking(arr) {
  let ret = 0;
  for (i = 0; i < arr.length; i++) {
    ret += arr[i] << (8 * i);
  }
  return ret;
}

function arrayPacking(arr) {
  return arr.reduce(
    (value, byte, i) => value + byte * Math.pow(256, i)
  );
}

console.log(arrayPacking([24, 85, 0]), 21784);
console.log(arrayPacking([23, 45, 39]), 2567447);
console.log(arrayPacking([1, 2, 4, 8]), 134480385);
