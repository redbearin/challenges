isNarcissistic = num => {
  const len = num.length;
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += Math.pow(+strNum[i], len);
  }
  if (sum === num) {
    return true;
  }
  return false;
}

const num = 8202;

document.getElementById('ans').textContent = isNarcissistic(num);
