const digitsCount = num => {
  // allows negative and positive
  num = Math.abs(num);
  // number is zero
  if (num === 0)
    return 1;
  let count = 0;
  // go digit by digit through
  // number and count
  while (num > 1) {
    count++;
    num = num / 10;
  }
  return count;
}

let num = 0;

document.getElementById('ans').textContent = digitsCount(num);