// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy

function leastFactorial(n) {
  let i = 1;
  let sum = 1;

  while (n > sum) {
    sum = sum * (i + 1);
    i++;
  }
  return sum;
}

function leastFactorial(n) {
  let i = 2;
  let sum = 1;

  while (n > sum) {
    sum *= i;
    i++;
  }
  return sum;
}

function leastFactorial(n) {
  let k = 1;

  for (let i = 2; k < n; i++) {
    k *= i;
  }

  return k;
}

console.log(leastFactorial(17), 24);
console.log(leastFactorial(1), 1);
console.log(leastFactorial(5), 6);
console.log(leastFactorial(24), 24);
