/**
* @param {number[]} arr
* @return {number[]}
*/

function heightChecker(arr) {
  let temp=0;
  let index=1;
  let max=0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp=arr[i]
        arr[i] = arr[j]
        arr[j]=temp
      }
    }
  }
  for(let i = 1; i < arr.length; i++) {
    if(arr[i - 1] != arr[i]) {
      arr[index] = arr[i];
      index++;
    }
   }
   for (let i = arr.length; i>index; i--) {
    arr.length--
  }
  for(let p=0; p<arr.length; p++){
    if(arr.length>3){
      max=arr[2]
    }else{
      max=arr[0]
    }
  }
  return max;
}
let arr = [1,1,2]
heightChecker(arr);

// Input: nums = [3,2,1]
// Output: [1]

