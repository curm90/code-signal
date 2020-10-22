// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/7jaup9HprdJno2diw

function tennisSet(score1, score2) {
  if (score1 === score2) return false;
  if (score1 > 7 || score2 > 7) return false;
  if ((score1 === 7 && score2 < 5) || (score2 === 7 && score1 < 5))
    return false;
  if ((score1 === 5 && score2 < 7) || (score2 === 5 && score1 < 7))
    return false;
  if (score1 < 6 && score2 < 6) return false;
  return true;
}

function tennisSet(score1, score2) {
  if (score1 === 7) return score2 >= 5 && score2 < 7;
  if (score2 === 7) return score1 >= 5 && score1 < 7;
  if (score1 === 6) return score2 < 5;
  if (score2 === 6) return score1 < 5;
  return false;
}

function tennisSet(score1, score2) {
  const min = Math.min(score1, score2);
  const max = Math.max(score1, score2);

  return (
    (max === 7 && min >= 5 && min <= 6) || (max === 6 && min < 5)
  );
}

console.log(tennisSet(3, 6), true);
console.log(tennisSet(8, 5), false);
console.log(tennisSet(6, 5), false);
console.log(tennisSet(7, 7), false);
console.log(tennisSet(7, 2), false);
