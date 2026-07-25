twoDigitSum = num => {
  return num % 10 + Math.floor(num/10);
}

const num = 38;

document.getElementById('ans').textContent = twoDigitSum(num);