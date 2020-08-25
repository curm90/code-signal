// https://app.codesignal.com/interview-practice/task/CfknJzPmdbstXhsoJ

function containsDuplicates(arr) {
  const lookup = {};

  for (let i = 0; i < arr.length; i++) {
    if (lookup[arr[i]]) {
      return true;
    } else {
      lookup[arr[i]] = 1;
    }
  }
  return false;
}

function containsDuplicates(arr) {
  const noDupes = new Set(arr);

  return arr.length !== noDupes.size;
}

console.log(containsDuplicates([1, 2, 3, 1]), true);
console.log(containsDuplicates([3, 1]), false);
