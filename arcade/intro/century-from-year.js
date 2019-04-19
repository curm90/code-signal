function centuryFromYear(year) {
  const century = Math.floor((year / 100))
  const decade = year % 100
  
  if (decade > 0) {
    return century + 1
  }
  return century
}

function centuryFromYear(year) {
  const century = Math.floor((year / 100))
  const decade = year % 100
  
  return decade > 0 ? century + 1 : century
}

console.log(centuryFromYear(1990));
