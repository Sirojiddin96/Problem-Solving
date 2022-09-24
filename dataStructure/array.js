 
 function findSumBetter(arr, weight){
  var hashTable={};

    for(var i=0, arrLength=arr.length; i<arrLength; i++){
      var currentElement=arr[i];
      difference=weight-currentElement;
      console.log(difference);

      // check the right one already exists
      console.log(hashTable[currentElement]);
      if(hashTable[currentElement]!=undefined){
        return [i, hashTable[weight-currentElement]]
      }else{
        // store index
        hashTable[difference]=i;
      }
    }
    return -1
 }

 console.log(findSumBetter([1,2,3,4,5], 9));