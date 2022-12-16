parityAnalysis = num=> {
  if(num < 10) {
    return true;
  }
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  if (num % 2 && sum % 2 || 
      num % 2 === 0 && sum % 2 === 0) {
    return true
  }
  return false;
}

const num = 3;
document.getElementById('ans').textContent = parityAnalysis(num);