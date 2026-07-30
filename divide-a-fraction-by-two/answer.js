fractionHalf = frac => {
  const fracArr = frac.split('/');
  fracArr[0] = +fracArr[0];
  fracArr[1] = +fracArr[1] * 2;
  if (fracArr[0] % 2 === 0 && fracArr[1] % 2 === 0) {
    fracArr[0] = fracArr[0]/2;
    fracArr[1] = fracArr[1]/2;
  }
  if (fracArr[0] % 3 === 0 && fracArr[1] % 3 === 0) {
    fracArr[0] = fracArr[0]/3;
    fracArr[1] = fracArr[1]/3;
  }
  if (fracArr[0] % 5 === 0 && fracArr[1] % 5 === 0) {
    fracArr[0] = fracArr[0]/5;
    fracArr[1] = fracArr[1]/5;
  }
  if (fracArr[0] % 7 === 0 && fracArr[1] % 7 === 0) {
    fracArr[0] = fracArr[0]/7;
    fracArr[1] = fracArr[1]/7;
  }
  return fracArr[0] + '/' + fracArr[1];
}

const frac = "52/97";

document.getElementById('ans').textContent = fractionHalf(frac);
