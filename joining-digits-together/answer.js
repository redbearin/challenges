joinDigits = num => {
  let strNums = '';
  for (let i = 1; i <= num; i++) {
    strNums += i;
  }
  return strNums.split('').join('-');
}

const num = 11;

document.getElementById('ans').textContent = joinDigits(num);