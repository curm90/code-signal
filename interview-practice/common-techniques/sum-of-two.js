// https://app.codesignal.com/interview-practice/task/Hm98RnqK9Be575yoj

function sumOfTwo(a, b, v) {
  if (!a || !b) return false;

  const hashSet = new Set(b);

  return a.some((num) => hashSet.has(v - num));
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42), true);
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 50), false);
