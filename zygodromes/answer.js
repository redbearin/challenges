isZygodrome = num => {
  const strNum = num.toString();
  if (strNum[0] !== strNum[1] || strNum.length < 2) {
    return false;
  }
  let count = 2;
  for (let i = 2; i < strNum.length; i++) {
    if (strNum[i] === strNum[i-1]) {
      count++;
    }
    if (strNum[i] !== strNum[i-1]) {
      if (i === strNum.length - 1) {
        return false;
      }
      if (count > 1) {
        count = 1;
      }
      else {
        return false;
      }
    }
  }
  return true;
}

const num = 2204;

document.getElementById('ans').textContent = isZygodrome(num);