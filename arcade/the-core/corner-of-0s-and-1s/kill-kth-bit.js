// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/b5z4P2r2CGCtf8HCR

function killKthBit(n, k) {
  if (n === 0) return 0;
  // first need to change n into a binary string
  let binary = [...convertDecimalToBinary(n)];
  // check if number at kth index is not a zero
  let encrypted = [binary.length] - k;
  if (binary[encrypted] == 1) {
    // change it to a zero
    binary[encrypted] = 0;
  }

  // convert binary number back to string
  let binaryStr = binary.join('');
  // return digit
  return parseInt(binaryStr, 2);
}

function convertDecimalToBinary(number) {
  let binary = '';
  let temp = number;

  while (temp > 0) {
    if (temp % 2 == 0) {
      binary = '0' + binary;
    } else {
      binary = '1' + binary;
    }

    temp = Math.floor(temp / 2);
  }

  return binary;
}

function killKthBit(n, k) {
  return n & ~(1 << (k - 1));
}

console.log(killKthBit(37, 3), 33);
console.log(killKthBit(37, 4), 37);
