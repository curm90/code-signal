// https://app.codesignal.com/arcade/code-arcade/intro-gates/SZB5XypsMokGusDhX

function largestNumber(n) {
  let result = '';

  while (n > 0) {
    result += '9';
    n--;
  }

  return +result;
}

function largestNumber(n) {
  return Math.pow(10, n) - 1;
}

function largestNumber(n) {
  return +'9'.repeat(n);
}

function largestNumber(n) {
  return Number('9'.repeat(n));
}

function largestNumber(n) {
  return 10 ** n - 1;
}

console.log(largestNumber(2), 99);
console.log(largestNumber(1), 9);
console.log(largestNumber(7), 9999999);
