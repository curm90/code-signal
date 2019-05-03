function isLucky(n) {
  n = n.toString()

  let half = n.length / 2
  let firstHalf = n.substring(0, half).split('').reduce((a, b) => {
    return +a + +b
  })
  let secondHalf = n.substring(half, n.length).split('').reduce((a, b) => {
    return +a + +b
  })

  return (firstHalf === secondHalf)
}

function isLucky(n) {
  const s = n.toString()
  let sum1 = 0
  let sum2 = 0
  
  for(let i = 0; i < s.length / 2; i++){
    sum1 += parseInt(s[i])
    sum2 += parseInt(s[s.length - i - 1]);       
  }    
  return sum1 === sum2
}
console.log(isLucky(1230))
