/**
* @param {number[]} arr
* @return {number[]}
*/

function heightChecker(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i]
  }
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
let arr = [-4, -1, 0, 3, 10]
heightChecker(arr);