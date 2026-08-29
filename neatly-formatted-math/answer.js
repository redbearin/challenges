formatMath = exp => {
  const expArr = exp.split(' ');
  let ans;
  switch (expArr[1]) {
    case '+':
      return exp + " = " + (+expArr[0] + +expArr[2]);
    case '-':
      return exp + " = " + (+expArr[0] - +expArr[2]);
    case '/':
      return exp + " = " + (+expArr[0] / +expArr[2]);
    case 'x':
      return exp + " = " + (+expArr[0] * +expArr[2]);
  }
}

const exp = "3 x 4";

document.getElementById('ans').textContent = formatMath(exp);