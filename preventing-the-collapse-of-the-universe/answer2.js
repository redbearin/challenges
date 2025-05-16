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

  const newStrArr = newStr.split(' ');

  let sub;
  for (let i = 0; i < newStrArr.length; i++) {
    newStrArr[i] = newStrArr[i].replace(/[()]/g, "");
    if (/\*\*/.test(newStrArr[i])) {
      sub = newStrArr[i].split(/\*\*/);
      newStrArr[i] = Math.pow(+sub[0], +sub[1]);
    }
  }

  let total, operator;

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

  if (total === 0) {
    return true;
  }
  return false;
}

const str = "7 / ((7**2) - ((-7)**2))";

document.getElementById('ans').textContent = catchZeroDivision(str);