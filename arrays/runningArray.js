/**
* @param {number[]} arr
* @return {number[]}
*/

function app(array) { 
  const newArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
      let sum=newArray[i - 1] + array[i]
      newArray.push(sum);
  }
   
  return newArray;
}
let arr = [1, 2, 3, 4]
app(arr);