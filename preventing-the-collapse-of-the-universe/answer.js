catchZeroDivision = str => {
  const strArr = str.split('/');
  if (strArr.length === 1) {
    return false;
  }
  const end = strArr[1].trim().replace(/[()]/g, "").split(' ');
  let total = +end[0];
  let operator;
  for (let i = 1; i < end.length; i++) {
    if (Number.isInteger(+end[i])) {
      switch (operator) {
        case '+':
          total += +end[i];
          break;
        case '-':
          total -= +end[i];
          break;
        case 2:
          total *= +end[i];
          break;
      }
      operator = undefined;
    }
    else {
      operator = end[i];
    }
  }
  if (total === 0) {
    return true;
  }
  return false;
}

const str = "2 / 0";

document.getElementById('ans').textContent = catchZeroDivision(str);