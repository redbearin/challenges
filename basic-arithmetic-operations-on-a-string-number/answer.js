arithmeticOperation = str => {
  const strArr = str.split(' ');
  if (strArr[1] === '/' && strArr[2] === '0') {
    return -1;
  }
  switch (strArr[1]) {
    case '+':
      return +strArr[0] + +strArr[2];
    case '-':
      return +strArr[0] - +strArr[2];
    case '*':
      return +strArr[0] * +strArr[2];
    case '/':
      return +strArr[0] / +strArr[2];
  }
}

const str = "12 / 0";

document.getElementById('ans').textContent = arithmeticOperation(str);