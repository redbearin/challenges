negativeSum = str => {
  // add a space between negative sign and last element
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-')
      newStr += ' -';
    else 
      newStr += str[i];
  }
  // split the string on anything that is not a - or digit
  const regex = /[.,\/#!$%\^&\*;:{}=\`~()\s]/;
  const numArr = newStr.split(regex);
  // sort the array of numbers
  numArr.sort((a,b) => a-b);
  // sum the negative numbers
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (+numArr[i] >= 0)
      break;
    sum += +numArr[i];
  }
  return sum;
}

const str = "22 13%14&-11-22 13 12";

document.getElementById('ans').textContent = negativeSum(str);