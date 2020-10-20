// https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  // iterate over the array
  for (let i = 0; i < inputArray.length; i++) {
    // if current num === elemenToReplace
    if (inputArray[i] === elemToReplace) {
      // set that num to be the substitute num
      inputArray[i] = substitutionElem;
    }
  }
  // return arr
  return inputArray;
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((num) => {
    if (num === elemToReplace) {
      return (num = substitutionElem);
    } else {
      return (num = num);
    }
  });
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((num) =>
    num === elemToReplace ? substitutionElem : num
  );
}

console.log(arrayReplace([1, 2, 1], 1, 3), [3, 2, 3]);
