// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/GeqSK26bvdrarkGH9

function concatenateArrays(a, b) {
  return a.concat(b);
}

function concatenateArrays(a, b) {
  return [...a, ...b];
}

console.log(concatenateArrays([2, 2, 1], [10, 11]), [2, 2, 1, 10, 11]);
