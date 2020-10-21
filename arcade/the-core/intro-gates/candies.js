// https://app.codesignal.com/arcade/code-arcade/intro-gates/DdNKFA3XCX6XN7bNz

function candies(n, m) {
  while (m % n !== 0) {
    m -= 1;
  }
  return m;
}

function m(n, m) {
  return m - (m % n);
}

function m(n, m) {
  return Math.floor(m / n) * n;
}

console.log(candies(3, 10), 9);
console.log(candies(1, 2), 2);
console.log(candies(10, 5), 0);
