/**
* @param {number[]} arr
* @return {number[]}
*/

function app(str) {
  let result;
  result = parseInt(str.toString().split('').reverse().join('').toString());
  if (str < 0) { result *= -1; }
  if (result < (Math.pow(2, 31) * -1) || result > Math.pow(2, 31) - 1) result= 0;
  console.log(result);
  return result;
}
let str = 2147483652
app(str);