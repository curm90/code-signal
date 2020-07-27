function matrixElementsSum(matrix) {
  let cost = 0
  let haunted = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        haunted.push(j)
      } else if (haunted.indexOf(j) === -1) {
        cost += matrix[i][j]
      }
    }
  }
  return cost
}

console.log(matrixElementsSum([
  [0,1,1,2], 
  [0,5,0,0], 
  [2,0,3,3]]));
