digitsCount = num => {
  let count = 1;
  while (num > 9 || 
         num < -9) {
    count++;
    num = num / 10;
  }
  return count;
}

const num = 0;

document.getElementById('ans').textContent = digitsCount(num);