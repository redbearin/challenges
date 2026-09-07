security = str => {
  // remove 'x'es
  const xRem = str.replace(/x/g, '');
  // check to see if thief is before $
  for (let i = 0; i < xRem.length; i++) {
    if (xRem[i] === 'T') {
      if (xRem[i + 1] === '$')
        return "ALARM!";
    }
  }
   // check to see if thief is after $
  for (let i = xRem.length - 1; i >= 0; i--) {
    if (xRem[i] === 'T') {
      if (xRem[i - 1] === '$')
        return "ALARM!";
    }
  }
  return 'Safe';
}

const str = "TTxxxx$xxGxx$Gxxx";

document.getElementById('ans').textContent = security(str);