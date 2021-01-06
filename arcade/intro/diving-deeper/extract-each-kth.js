// https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R

function extractEachKth(arr, k) {
  for (let i = k - 1; i < arr.length; i += k - 1) {
    arr.splice(i, 1);
  }

  return arr;
}

function extractEachKth(arr, k) {
  return arr.filter((_, i) => (i + 1) % k);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6], 3), [1, 2, 4, 5]);
console.log(extractEachKth([1, 1, 1, 1, 1, 1], 1), []);
console.log(extractEachKth([1, 2, 1, 2, 1, 2, 1], 2), [1, 1, 1, 1]);
