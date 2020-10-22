// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/aFF9HDm2Rsti9j5kc

// while a is not equal to b do
//   increase a by 1
//   decrease b by 1

function isInfiniteProcess(a, b) {
  while (a !== b) {
    a++;
    b--;

    if (a > b) {
      return true;
    }
  }
  return false;
}

function isInfiniteProcess(a, b) {
  return a > b || a % 2 !== b % 2;
}

console.log(isInfiniteProcess(2, 6), false);
console.log(isInfiniteProcess(2, 3), true);
