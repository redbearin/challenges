digitCount = num => {
  const strNumArr = num.toString().split('');
  const obj = {};
  for (let i = 0; i < strNumArr.length; i++) {
    obj[strNumArr[i]] ?
    obj[strNumArr[i]]++ :
    obj[strNumArr[i]] = 1;
  }
  for (let i = 0; i < strNumArr.length; i++) {
    strNumArr[i] = obj[strNumArr[i]];
  } 
  return +strNumArr.join('');
}

const num = 221333;

document.getElementById('ans').textContent = digitCount(num);