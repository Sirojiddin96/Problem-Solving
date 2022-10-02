
function app(s, t) {
  let str1 = s.split('')
  let str2 = t.split('')
  if (str1.length != str2.length) {
    return false
  }
  let map = {}
  for (let i = 0; i < str1.length; i++) {
    var a = str1[i];
    var b = str2[i];
    if (map[a] === undefined) {
      map[a]=b;
    }else if(map[a]!==b){
      return false
    }
    for(let key in map){
      if(key!==a && b==map[key]){
        return false
      }
    }
  }
  return true

}
let s = 'ab';
let t = 'ab';
const result=app(s, t);

console.log(result);