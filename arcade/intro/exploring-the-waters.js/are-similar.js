// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

function areSimilar(a, b) {
  // place to store the differences indexes
  const difference = [];

  // iterate over a
  for (let i = 0; i < a.length; i++) {
    // if current num in a does not equal current num in b
    if (a[i] !== b[i]) {
      // push to difference
      difference.push(i);
    }
  }

  // if difference length is 0 return true
  if (difference.length === 0) return true;

  // if difference length is 2
  if (difference.length === 2) {
    // if we can swap the two numbers and have them equal each other in each array
    if (
      a[difference[0]] === b[difference[1]] &&
      b[difference[0]] === a[difference[1]]
    ) {
      // return true
      return true;
    }
  }
  // else return false
  return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]), true);
console.log(areSimilar([1, 2, 3], [3, 2, 1]), true);
console.log(areSimilar([1, 2, 2], [2, 1, 1]), false);
console.log(areSimilar([1, 1, 4], [1, 2, 3]), false);
