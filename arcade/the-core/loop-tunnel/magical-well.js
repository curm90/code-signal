// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LbuWRHnMoJH9SAo4o

function magicalWell(a, b, n) {
  // place to store the result
  let total = 0;
  // loop until n is 0
  while (n !== 0) {
    // total is equal to a * b
    total += a * b;
    // increment a and b
    a++;
    b++;
    // decrement n
    n--;
  }
  // return result
  return total;
}

function magicalWell(a, b, n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += a * b;

    a++;
    b++;
  }

  return total;
}

function magicalWell(a, b, n) {
  if (n === 0) return 0;

  return a * b + magicalWell(++a, ++b, --n);
}

function magicalWell(a, b, n) {
  return n !== 0 ? a * b + magicalWell(++a, ++b, --n) : 0;
}

console.log(magicalWell(1, 2, 2), 8);
console.log(magicalWell(1, 1, 1), 1);
console.log(magicalWell(6, 5, 3), 128);
