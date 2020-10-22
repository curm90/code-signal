// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/sgDWKCFQHHi5D3Szj

function extraNumber(a, b, c) {
  if (a === b) return c;
  if (a === c) return b;
  return a;
}

function extraNumber(a, b, c) {
  return a === b ? c : a === c ? b : a;
}

function extraNumber(a, b, c) {
  // 0010 ^ 0111 = 0101 ^ 0010 = 0111
  return a ^ b ^ c;
}

console.log(extraNumber(2, 7, 2), 7);
