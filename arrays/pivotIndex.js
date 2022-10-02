/**
* @param {number[]} arr
* @return {number[]}
*/

function app(nums) {
  if (nums == null) {
    return null
  }
  temp = 0;
  let leftSum = []
  let rightSum = []
  for (let i = 0; i < nums.length; i++) {
    leftSum[i] = temp;
    temp += nums[i]
  }
  temp = 0;
  for (let j = nums.length - 1; j >= 0; j--) {
    rightSum[j] = temp;
    temp += nums[j]
  }
  for (let k = 0; k < nums.length; k++) {
    if (leftSum[k] == rightSum[k]) return k
  }
  
  return -1;
}
let nums = [1, 7, 3, 6, 5, 6]
console.log(app(nums));;

/**
* @param {number[]} arr
* @return {number[]}
*/
