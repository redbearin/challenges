twoDigitSum = num => {
  return num.toString().split('').reduce((acc,val) => acc + +val, 0);
}

const num = 38;

document.getElementById('ans').textContent = twoDigitSum(num);