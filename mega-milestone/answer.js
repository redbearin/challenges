const howMuchMega = num => {
  // convert all numbers to positive values
  num = Math.abs(num);
  // no milestone
  if (num < 100) 
    return "not a mega milestone";
  // a milestone
  let str = '';
  // add Mega to string for 100 and 
  // each order of magnitude
  while (num >=100) {
    str += "MAGA ";
    // reduce the number by an order of magnitude
    num /= 10;
  }
  return str + "milestone";
};

const num = -9999.9;

document.getElementById('ans').textContent = howMuchMega(num);