// https://app.codesignal.com/arcade/code-arcade/intro-gates/bszFiQAog96G9CXKg

function seatsInTheater(nCols, nRows, col, row) {
  let cols = nCols - col + 1;
  let rows = nRows - row;

  return cols * rows;
}

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3), 96);
