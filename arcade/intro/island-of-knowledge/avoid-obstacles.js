// https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5

function avoidObstacles(arr) {
  let jumps = 2;

  while (arr.some((obstacle) => obstacle % jumps === 0)) {
    jumps++;
  }

  return jumps;
}

function avoidObstacles(arr) {
  for (let i = 1; ; i++) {
    if (arr.every((obstacle) => obstacle % i > 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]), 4);
console.log(avoidObstacles([2, 3]), 4);
console.log(avoidObstacles([1, 4, 10, 6, 2]), 7);
console.log(avoidObstacles([1000, 999]), 6);
