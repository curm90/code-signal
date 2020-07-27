function centuryFromYear(year) {
  const century = Math.floor(year / 100);
  const decade = year % 100;

  if (decade > 0) {
    return century + 1;
  } else {
    return century;
  }
}

function centuryFromYear(year) {
  const century = Math.floor(year / 100);
  const decade = year % 100;

  return decade > 0 ? century + 1 : century;
}

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

function centuryFromYear(year) {
  return Math.floor((year - 1) / 100) + 1;
}

console.log(centuryFromYear(1901));
