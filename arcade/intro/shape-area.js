function shapeArea(n) {
  let area = 1

  for (let i = 1; i < n; i++) {
    area += 4 * i
  }
  return area
}


function shapeArea(n) {
  return (1 + (n - 1) * n) * 2 - 1
}

console.log(shapeArea(2));
