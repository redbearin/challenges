lychrel = num => {
  let count = 0;
  let flag = false;
  let strNum = num.toString();
  while (count <= 500) {
    // odd
    if (strNum.length % 2) {
      for (let i = 0; i < Math.floor(strNum.length / 2); i++) {
        if (strNum[i] !== strNum[strNum.length - (i + 1)]) {
          flag = true;
        }
      }
    }
    // even 
    else {
      for (let i = 0; i < strNum.length / 2; i++) {
        if (strNum[i] !== strNum[strNum.length - (i + 1)]) {
          flag = true;
        }
      }
    }
    if (!flag) {
      return count;
    }
    // not a palindrome
    else {
      flag = false;
      count++;
      strNum = (+strNum + +strNum.split('').reverse().join('')).toString();
    }
  }
  return true;
}


const num = 295;

document.getElementById('ans').textContent = lychrel(num);
