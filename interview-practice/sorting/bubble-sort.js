// https://app.codesignal.com/interview-practice/task/RDt7X5xswpwWHSone/description

function bubbleSort(items) {
  const swap = (firstIndex, secondIndex) => {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  };

  const len = items.length;
  for (let i = 0; i < len; i++) {
    const stop = len - i;
    for (let j = 0; j < stop - 1; j++) {
      if (items[j] > items[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  return items;
}

const arr = [2, 4, 1, 5];
console.log(bubbleSort(arr), [1, 2, 4, 5]);
