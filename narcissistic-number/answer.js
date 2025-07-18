isNarcissistic = num => {
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += Math.pow(+strNum[i], strNum.length);
  }
  if (sum === num) {
    return true;
  }
  return false;
}

const num = 8202;

document.getElementById('ans').textContent = isNarcissistic(num);
