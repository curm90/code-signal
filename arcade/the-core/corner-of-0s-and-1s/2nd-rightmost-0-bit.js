// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/9nSj6DgqLDsBePJha

function secondRightmostZeroBit(n) {
  return (function (input) {
    const binary = [...input.toString(2)].reverse();
    let count = 0;
    let index;

    for (let i = 0; i < binary.length; i++) {
      const currentNum = binary[i];

      if (currentNum == 0) {
        count++;
      }

      if (count === 2) {
        index = i;
        break;
      }
    }

    return 2 ** index;
  })(n);
}

function secondRightmostZeroBit(n) {
  return ~(n |= -~n) & -~n;
}

console.log(secondRightmostZeroBit(37), 8);
console.log(secondRightmostZeroBit(1073741824), 2);
