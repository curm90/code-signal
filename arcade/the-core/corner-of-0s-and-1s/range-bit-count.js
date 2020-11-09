// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/eC2Zxu5H5SnuKxvPT

function rangeBitCount(a, b) {
  // place to store the count
  let count = 0;
  // place to store the array
  const binArr = [];
  // iterate from a to b
  for (let i = a; i <= b; i++) {
    // push bin string into binArr
    binArr.push(convertDecToBin(i));
  }

  // turn binArr to a string
  const binStr = binArr.join('');
  // iterate over string
  for (let i = 0; i < binStr.length; i++) {
    const element = binStr[i];
    // if current string is a 1
    if (element == 1) {
      // increment count
      count++;
    }
  }

  // return count
  return count;
}

function convertDecToBin(num) {
  return num.toString(2);
}

console.log(rangeBitCount(2, 7), 11);
console.log(rangeBitCount(0, 1), 1);
console.log(rangeBitCount(1, 10), 17);
