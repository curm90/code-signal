// https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB/description

// transpose function
function transpose(matrix) {
  let row = matrix.length;
  let temp;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < i; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
}

// reverse matrices function
function reverseMatrices(matrix) {
  let row = matrix.length;
  let temp;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < row / 2; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][row - 1 - j];
      matrix[i][row - 1 - j] = temp;
    }
  }
  return matrix;
}

function rotateImage(matrix) {
  return reverseMatrices(transpose(matrix));
}

const rotateImage = (a) =>
  a.map((_, i) => a.map((val) => val[i]).reverse());

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]
);
