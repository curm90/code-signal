// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/ND8nghbndTNKPP4Tb

function firstReverseTry(arr) {
  if (arr.length) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}

function firstReverseTry(arr) {
  if (arr.length) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
}

function firstReverseTry(arr) {
  return arr.length ? [arr.pop(), ...arr.slice(1), arr.shift()] : arr;
}

console.log(firstReverseTry([1, 2, 3, 4, 5]), [5, 2, 3, 4, 1]);
