evalAlgebra = eq => {
  const eqArr = eq.split(' ');

  if (eqArr[0] === 'x') {
    if (eqArr[1] === '+') {
      return +eqArr[4] - +eqArr[2];
    }
    else {
      return +eqArr[4] + +eqArr[2];
    }
  }
  
  if (eqArr[2] === 'x') {
    if (eqArr[1] === '+') {
      return +eqArr[4] - +eqArr[0];
    }
    else {
      return - +eqArr[4] + +eqArr[0];
    }
  }

  if (eqArr[4] === 'x') {
    if (eqArr[1] === '+') {
      return +eqArr[0] + +eqArr[2];
    }
    else {
      return +eqArr[0] - +eqArr[2];
    }
  }
}

const eq = "x - 46 = -2";

document.getElementById('ans').textContent = evalAlgebra(eq);