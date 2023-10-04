digitOccurrences = (min, max, digit) => {
  let strDig = digit.toString();
  let strNum;
  let count = 0;
  for (let i = min; i <= max; i++) {
    strNum = i.toString();
    for (let j = 0; j < strNum.length; j++) {
      if (strNum[j] === strDig) {
        count++;
      }
    }
  }
  return count;
}

const min = 51;
const max = 55;
const digit = 5;

document.getElementById('ans').textContent = digitOccurrences(min, max, digit);