function commonCharacterCount(a, b) {
  let s1 = a.split('')
  let s2 = b.split('') 
  let count = 0

  s1.forEach(letter => {
    if (s2.includes(letter)) {
      count++
      s2.splice(s2.indexOf(letter), 1)
    }
  })
  return count
}

console.log(commonCharacterCount('abac', 'xyzbac'))
