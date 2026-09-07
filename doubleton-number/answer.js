doubleton = num => {
  let uniqueDigits, digitsUsed;
  let strNum = num.toString();
  let doubleton = false;
  while(!doubleton) {
    uniqueDigits = 0;
    digitsUsed = [0,0,0,0,0,0,0,0,0,0];
    strNum = (+strNum + 1).toString();
    for (let i = 0; i < strNum.length; i++) {
      if (!digitsUsed[+strNum[i]]) {
        digitsUsed[+strNum[i]] = 1;
        uniqueDigits++;
      }
      if (uniqueDigits > 2) {
        break;
      }
    }
    if (uniqueDigits === 2) {
      return +strNum;
    }
  }
}

const num = 10;

document.getElementById('ans').textContent = doubleton(num);