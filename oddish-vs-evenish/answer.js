oddishOrEvenish = num => {
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  if (sum % 2 === 0)
    return 'Evenish';
  else
    return 'Oddish';
}

const num = 43;

document.getElementById('ans').textContent = oddishOrEvenish(num);