digitOccurrences = (min, max, digit) => {
  let digitCount = 0;
  let strNum;
  // go number by number from min to max
  for (let num = min; num <= max; num++) {
    // convert number to string
    strNum = num.toString();
    // go through each digit in the number
    for (let j = 0; j < strNum.length; j++) {
      // digit matches the digit input
      if (+strNum[j] === digit)
        // increment the count
        digitCount++;
    }
  } 
  return digitCount;
}

const min = 1;
const max = 8;
const digit = 9;

document.getElementById('ans').textContent = digitOccurrences (min, max, digit);