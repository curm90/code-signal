// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/J7PQDxpWqhx7HrvBZ

function metroCard(lastNumberOfDays) {
  return lastNumberOfDays === 31 ? [28, 30, 31] : [31];
}

console.log(metroCard(30), [31]);
console.log(metroCard(28), [31]);
console.log(metroCard(31), [28, 30, 31]);
