// https://app.codesignal.com/interview-practice/task/C8Jdyk3ybixqQdAvM/description

function strstr(s, x) {
  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    // slice out from current index to current index + length of x
    const slice = s.slice(i, i + x.length);
    // if that slice is equal to x
    if (slice === x) {
      // return index
      return i;
    }
  }
  // return -1
  return -1;
}

console.log(strstr('CodefightsIsAwesome', 'IA'), -1);
console.log(strstr('CodefightsIsAwesome', 'IsA'), 10);
