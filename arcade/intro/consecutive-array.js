function makeArrayConsecutive2(statues) {
  const range = statues.sort((a, b) => a - b)
  let additional = 0

  if (range.length - 1 === 0) return 0

  for (let i = 0; i <= range.length - 2; i++) {
    additional += range[i + 1] - range[i] -1
  }
  return additional
}

function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => a - b)

  const min = statues[0]
  const max = statues[statues.length - 1]
  let count = 0

  for (let i = min; i < max; i++) {
    if (statues.indexOf(i) === -1) {
      count++
    }
  }
  return count
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))

// 2 3 6 8