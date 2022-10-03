
function app(s, t) {
  let str1 = s.split('')
  let str2 = t.split('')
  let count = 0
  for (let i = 0; i < str2.length; ++i) {
     if(str1[count]==str2[i]){
      count++
     }
  }
  
  return count==str1.length
}
let s = 'abc';
let t = 'ahgdc';
console.log(app(s, t));;

