// https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta

function phoneCall(min1, min2_10, min11, s) {
  const tenMinCost = min1 + min2_10 * 9;

  if (s >= tenMinCost) {
    return Math.floor(10 + (s - tenMinCost) / min11);
  }

  if (s >= min1) {
    return Math.floor((s - min1) / min2_10 + 1);
  }

  return 0;
}

console.log(phoneCall(3, 1, 2, 20), 14);
console.log(phoneCall(2, 2, 1, 2), 1);
