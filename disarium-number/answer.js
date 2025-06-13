isDisarium = num => {
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += Math.pow(+strNum[i], i+1);
  }
  return sum === num?
  true:
  false;
}

const num = 75;

document.getElementById('ans').textContent = isDisarium(num);