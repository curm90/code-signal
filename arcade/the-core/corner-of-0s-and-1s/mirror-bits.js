// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/e3zfPNTwTa9qTQzcX

function mirrorBits(a) {
  // turn input number to binary string
  const binary = a.toString(2);
  // reverse it
  const mirrored = [...binary].reverse();
  // turn it back to a decimal
  const mirroredStr = mirrored.join('');
  // return mirrored value
  return parseInt(mirroredStr, 2);
}

function mirrorBits(a) {
  return parseInt([...a.toString(2)].reverse().join(''), 2);
}

const mirrorBits = (a) =>
  parseInt([...a.toString(2)].reverse().join(''), 2);

console.log(mirrorBits(97), 67);
