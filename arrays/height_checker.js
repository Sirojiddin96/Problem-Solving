/**
* @param {number[]} arr
* @return {number[]}
*/

function heightChecker(arr) {
  let heights = arr.slice();
  let expected = arr
  let temp=0;
  let index=0
  for (let i = 0; i < expected.length; i++) {
    for (let j = i; j < expected.length; j++) {
      if (expected[i] > expected[j]) {
        temp=expected[i]
        expected[i] = expected[j]
        expected[j]=temp
      }
    }
  }
  for(let k=0; k<expected.length; k++){
    if(expected[k]!=heights[k]){
      expected[index]=expected[k]
      index++
    }
  }
  console.log(index);
  return index;
}
let arr = [5,1,2,3,4];
heightChecker(arr);

// Input: nums = [5,1,2,3,4]
// Output: [5]

