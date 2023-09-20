lunarSum = (num1, num2) => {
  // convert numbers to string numbers
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  let lunarSum = '';
  let lengthDiff = num1Str.length - num2Str.length;
  // num1 is longer
  if (lengthDiff > 0) {
    for (let i = num1Str.length - 1; i >= 0; i--) {
      // num1 digit is larger
      if (num2Str[i - lengthDiff] === undefined || 
          +num1Str[i] > +num2Str[i - lengthDiff])
        lunarSum = num1Str[i] + lunarSum;
      // num2 digit is larger
      else 
        lunarSum = num2Str[i - lengthDiff] + lunarSum;
    }
  }
  // num1 and num2 are same length or
  // num2 is longer than num1
  else {
    for (let i = num2Str.length - 1; i >= 0; i--) {
      // num2 digit is larger
      if (num1Str[i + lengthDiff] === undefined || 
          +num2Str[i] > +num1Str[i + lengthDiff]) 
        lunarSum = num2Str[i] + lunarSum;
      // num1 digit is larger
      else 
        lunarSum = num1Str[i + lengthDiff] + lunarSum;
    }
  }
  return +lunarSum;
}

const num1 = 20;
const num2 = 140;

document.getElementById('ans').textContent = lunarSum(num1, num2);