isHappy = num => {
  if (num === 1) {
    return true;
  }
  let strNum;
  while (num !== 4 && num !== 1) {
    strNum = num.toString();
    num = 0;
    for (let i = 0; i < strNum.length; i++) {
      num += Math.pow(+strNum[i], 2);
    }
    if (num === 1) {
      return true;
    }
    if (num === 4) {
      return false;
    }
  }
}

const num = 139;

document.getElementById('ans').textContent = isHappy(num);