/**
* @param {number[]} arr
* @return {number[]}
*/

function sortArrayByParity(arr, n) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != n) {
      arr[index++] = arr[i];
      index;
    }
  }
  console.log(index);
  return arr;
}
let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let n = 2
sortArrayByParity(arr, n);

// Input: nums = [0,1,2,2,3,0,4,2]
// Output: [0,1,4,0,3]

