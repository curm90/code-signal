// https://app.codesignal.com/arcade/code-arcade/intro-gates/HEsmEacHr2s9wahjr

function maxMultiple(divisor, bound) {
  let answer = bound;

  while (answer % divisor !== 0) {
    answer--;
  }

  return answer;
}

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

console.log(maxMultiple(3, 10), 9);
console.log(maxMultiple(2, 7), 6);
console.log(maxMultiple(7, 100), 98);
