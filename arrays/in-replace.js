 /**
 * @param {number[]} arr
 * @return {number[]}
 */

  function replaceGreatestElementFromRight(arr){
    if(arr==null){
      return null
    }
    let max=-1;
    for(let i=arr.length-1;i>=0; i--){
      var temp = max;
      if(arr[i]>max){
        max=arr[i]
    }
    arr[i] = temp;
   }
    return arr
  }
  let arr = [17,18,5,4,6,1];
replaceGreatestElementFromRight(arr);
  
  // Output: [18,6,6,6,1,-1]
  
  // Steps:
  // 1. eng oxirgi valuedan boshlaymiz va max deb belgilaymiz max=-1
  // 2. loop ni teskarisiga, oxiridan boshiga qarab aylantiramiz.
  // 3. har bir aylana ichida alohida bitta temp variable yasab, uni maxga tenglaymiz.
  // 4. agar oxiridan boshlangan array value si max dan katta bo'lsa, o'sha value ni maxga tenglaymiz.
  // 5. va loopni aylanishdan to'xtagan vaqt array ma'lumotlarini vaqtincha deb yaratilgan tempga to'g'irlab qo'yamiz.
  // 6. arrayni qaytarib(return) qo'yamiz.
  // 7. test qilamiz [17,18,5,4,6,1];
