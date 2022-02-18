digitalDivision = num => {
  let eachDigit = true;
  let count = 0;
  let sum = 0;
  let product = 1;
  // convert num to string
  let numStr = num.toString();
  // go digit by digit thru num
  for (let i = 0; i < numStr.length; i++) {
    // division by each digit true 
    // digit not zero
    if (eachDigit && numStr[i] !== '0') {
      // num not evenly divisible by digit
      if (num % +numStr[i] !== 0)
        eachDigit = false;
    }
    // keep track of sum and product of digits
    sum += +numStr[i];
    product *= +numStr[i];
  }
  // num divisible by each digit
  if (eachDigit) 
    count++;
  // num divisible by product of digits
  if (num % product === 0)
    count++;
  // num divisible by sum of digits
  if (num % sum === 0)
    count++;

  switch (count) {
    // failed all tests
    case 0:
      return 'Indivisible';
    // passed one test
    case 1:
      return 1;
    // passed two tests
    case 2:
      return 2;
    // passed all tests
    case 3:
      return "Perfect";
  }
}
const num = 31;

document.getElementById('ans').textContent = digitalDivision(num);