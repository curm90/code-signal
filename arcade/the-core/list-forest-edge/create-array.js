// https://app.codesignal.com/arcade/code-arcade/list-forest-edge/gmZFbpR9cirL3Jpf2

function createArray(size) {
  let count = size;
  const resultArr = [];

  while (count > 0) {
    resultArr.push(1);
    count--;
  }

  return resultArr;
}

function createArray(size) {
  const resultArr = new Array(size);

  for (let i = 0; i < size; i++) {
    resultArr[i] = 1;
  }

  return resultArr;
}

function createArray(size) {
  return Array.from({ length: size }, () => 1);
}

function createArray(size) {
  return [...new Array(size)].map(() => 1);
}

function createArray(size) {
  return new Array(size).fill(1);
}

console.log(createArray(4), [1, 1, 1, 1]);
console.log(createArray(2), [1, 1]);
console.log(createArray(1), [1]);
