count = num => {
  // case where num is 0
  if (num === 0)
    return 1;
  // convert negative # to positive #
  if (num < 0)
    num = num * -1;
  // count digits
  let numDigits = 0;
  while (num > 0) {
    numDigits++;
    num = Math.floor(num /10);
  }
  return numDigits;
}

const num = 0;

document.getElementById('ans').textContent = count(num);