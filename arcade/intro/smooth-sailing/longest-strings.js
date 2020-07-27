function allLongestStrings(arr) {
  let longest = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentString = arr[i];

    if (longest < currentString.length) {
      longest = currentString.length;
    }
  }

  return arr.filter((item) => {
    return item.length === longest;
  });
}

console.log(
  allLongestStrings(['enyky', 'benyky', 'yely', 'varennyky'])
);
