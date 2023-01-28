rootDigit = num => {
  const numStrArr = num.toString().split('');
  let sum = 0;
  for (let i = 0; i < numStrArr.length; i++) {
    sum += +numStrArr[i];
  }
  if (sum > 9) {
    return rootDigit(sum);
  }
  return sum;
}

const num = 999888777;
document.getElementById('ans').textContent =rootDigit(num);