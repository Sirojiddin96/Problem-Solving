function findOddIndexofArr(arr){
  let arrLength=arr.length;
  // Check for edge cases.
  if (arr == null) {
   return null;
 }
   for(let i=0; i<arrLength; i++){
     if(i%2==0){
       arr[i]*=arr[i];
     }
   }
   return arr;
 }
 console.log(findOddIndexofArr([3,2,5,7,4,8]));