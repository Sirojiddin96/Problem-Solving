/**
* @param {number[]} arr
* @return {number[]}
*/

function removeDuplicatesFromSortedArray(arr) {
  let index = 1;
  for(let i = 1; i < arr.length; i++) {
   if(arr[i - 1] != arr[i]) {
     arr[index] = arr[i];
     index++;
   }
  }
  return arr;
 }
 let arr = [0,0,1,1,1,2,2,3,3,4];
 removeDuplicatesFromSortedArray(arr);
 
 // Output: [0,1,2,3,4]
 
 