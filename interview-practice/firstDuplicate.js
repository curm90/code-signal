function firstDuplicate(a) {
  let firstIndex = a.length + 1;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        if (firstIndex > j) {
          firstIndex = j;
        }
      }
    }
  }
  return firstIndex < a.length ? a[firstIndex] : -1;
}

function firstDuplicate(a) {
  const vals = new Set();

  for (const v of a) {
    if (vals.has(v)) {
      return v;
    } else {
      vals.add(v);
    }
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]), 3);
console.log(firstDuplicate([2, 2]), 2);
console.log(firstDuplicate([2, 1, 3, 5]), -1);
