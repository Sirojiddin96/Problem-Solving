/**
* @param {number[]} arr
* @return {number[]}
*/

function heightChecker(nums) {
  let obj = {}
  let res = []

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i]
     
  }
  for (let i = 0; i < nums.length; i++) {
    console.log(obj[i],'==',i);
    if (i + 1 != obj[i + 1]) 
    res.push(i + 1)
  }
  return res
}
let arr = [4, 3, 2, 7, 8, 2, 3, 1]
heightChecker(arr);

// Input: nums = [3,2,1]
// Output: [1]


// function heightChecker(nums) {
//   let obj = nums.slice()
//   let res = []

//   // for (let i = 0; i < nums.length; i++) {
//   //   obj[nums[i]] = nums[i]
     
//   // }
//   for (let i = 0; i < nums.length; i++) {
//     if (i + 1 != obj[i + 1]) 
  
//     res.push(i + 1)
//     console.log(res);
//   }
//   return res
// }
// let arr = [4, 3, 2, 7, 8, 2, 3, 1]
// heightChecker(arr);


// [ 1 ]
// [ 1, 3 ]
// [ 1, 3, 4 ]
// [ 1, 3, 4, 5 ]
// [ 1, 3, 4, 5, 6 ]
// [ 1, 3, 4, 5, 6, 7 ]
// [
//   1, 3, 4, 5,
//   6, 7, 8
// ]