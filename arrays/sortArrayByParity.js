function sortArrayByParity(arr) {
  let temp = 0;
  let a = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      for (let j = i; j > a; j--) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp
      }
      a++
    }
  }
  return arr;
}
let arr = [3, 1, 2, 4, 5, 7, 8];
sortArrayByParity(arr);