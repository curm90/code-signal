// https://app.codesignal.com/interview-practice/task/4G3h3pMqS9mKLLiYN/description

function mergeKArrays(arrays) {
  var firstUnused = [];
  var result = [];
  var n = 0;

  for (var i = 0; i < arrays.length; i++) {
    firstUnused.push(0);
    n += arrays[i].length;
  }

  for (var i = 0; i < n; i++) {
    var minIndex = -1;
    var minValue = 0;

    for (var j = 0; j < arrays.length; j++) {
      if (firstUnused[j] < arrays[j].length) {
        if (arrays[j][firstUnused[j]] < minValue || minIndex === -1) {
          minIndex = j;
          minValue = arrays[j][firstUnused[j]];
        }
      }
    }

    result.push(minValue);
    firstUnused[minIndex]++;
  }
  return result;
}

const arr = [
  [1, 3, 5],
  [2, 3],
  [2, 3, 5, 8],
];
console.log(mergeKArrays(arr), [1, 2, 2, 3, 3, 3, 5, 5, 8]);
