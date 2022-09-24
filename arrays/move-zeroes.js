function removeDuplicatesFromSortedArray(arr) {
  let numZero = 0; 
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        arr[numZero++] = arr[i];
      }
  }

  for (let i = numZero; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
let arr = [0, 1, 0, 3, 12];
removeDuplicatesFromSortedArray(arr);