// https://app.codesignal.com/arcade/code-arcade/intro-gates/vExYvcGnFsEYSt8nQ

function circleOfNumbers(n, firstNumber) {
  // half n
  const half = n / 2;
  // if half n is less than firstNum
  if (half > firstNumber) {
    // firstNum + half of n
    return firstNumber + half;
    // else
  } else {
    // half n - firstNum
    return firstNumber - half;
  }
}

function circleOfNumbers(n, firstNumber) {
  return (firstNumber + n / 2) % n;
}

console.log(circleOfNumbers(18, 6), 15);
console.log(circleOfNumbers(10, 2), 7);
