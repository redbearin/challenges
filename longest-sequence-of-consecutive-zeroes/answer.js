longestZero = str => {
  let biggest = 0;
  let count = 0;
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    // 0
    if (str[i] === '0') {
      count++; 
      if (!flag) {
        flag = true;
      }
      if(i === str.length - 1) {
        if (count > biggest) {
          biggest = count;
        }
      }
    }
    // 1
    else {
      console.log('num is 1')
      if (flag) {
        flag = false;
        if (count > biggest) {
          biggest = count;
        }
        count = 0;
      } 
    }
  }
  console.log('0'.repeat(biggest))
  return '0'.repeat(biggest);
}
const str = "100100100";

document.getElementById('ans').textContent = longestZero(str);