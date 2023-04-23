catchZeroDivision = str => {
  // no division
  if(!str.includes('/')) {
    return false;
  }
  // no parentheses, 1 num in denominator
  if(!str.includes('(')) {
    const strArr = str.split(' / ');
    if (strArr[1] === '0') return true;
    return false;
  }

  // part to right of '/'
  let countLtPar = 0;
  let countRtPar = 0;
  let newStr = '';
  for (let i = str.indexOf('/') + 2; i < str.length; i++) {
    if (str[i] === "(") {
      countLtPar++;
    }
    if (str[i] === ")") {
      countRtPar++;
    }
    newStr += str[i];
    if (countLtPar > 0 && 
        countLtPar === countRtPar) {
      break;
    }
  }

  // remove extra () at ends
  if (countLtPar === 1 || 
      newStr[0] === '(' && 
      newStr[1] === '(') {
    newStr = newStr.slice(1, -1);
  }

  const newStrArr = newStr.split(' ');

  let total, operator;

  // one set of () in denom
  if (countLtPar === 1) {
    for (let i = 0; i < newStrArr.length; i++) {
      if (Number.isInteger(+newStrArr[i])) {
        switch (operator) {
          case undefined:
            if (total === undefined) total = 0;
            total += +newStrArr[i];
            break;
          case '+':
            total += +newStrArr[i];
            operator = undefined;
            break;
          case '-':
            total -= +newStrArr[i];
            operator = undefined;
            break;
          case '*':
            total *= +str[i];
            operator = undefined;
            break;
        }
      }
      else {
        operator = newStrArr[i];
      }
    }
  }
  if (total === 0) {
    return true;
  }
  return false;
}

const str = "23 - 23 / 23";

document.getElementById('ans').textContent = catchZeroDivision(str);