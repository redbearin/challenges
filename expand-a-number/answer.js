expandedForm = num => {
  let str = '';
  let numZeroes = 0;
  let digit;
  while(num >= 1) {
    digit = num % 10;
    // digit not a zero
    if (digit > 0) {
        str = +digit + '0'.repeat(numZeroes) + str;
      // not the first digit
      if (num > 10)
        str = " + " + str;
    }
    num = Math.floor(num/10);
    numZeroes++;
  }
  return str;
}

const num = 802539;

document.getElementById('ans').textContent = expandedForm(num);