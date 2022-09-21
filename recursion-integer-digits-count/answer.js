count = (num, digits) => {
  // convert num to string
  strNum = num.toString();
  // add one to the digits count
  digits++;
  // remove the last digit (the one counted)
  strNum = strNum.slice(0, -1);
  // have not counted all digits
  if (strNum.length && strNum !== '-')
    return count (+strNum, digits)
  // counted all digits
  return digits;
}

const num = 654321;
const digits = 0;

document.getElementById('ans').textContent = count(num, digits);