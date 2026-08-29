digitsCount = num => {
  if (num === 0) {
    return 1;
  }
  num = Math.abs(num);
  let count = 0;
  while (num >= 1) {
    num = Math.trunc(num / 10);
    count++;
  }
  return count;
}

const num = 4666;

document.getElementById('ans').textContent = digitsCount(num);