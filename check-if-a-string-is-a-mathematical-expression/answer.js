mathExpr = str => {
  const strArr = str.split(/[*+'/`%-]/);
  for (let i = 0; i < strArr.length; i++) {
    if (!/[0-9]+/.test(strArr[i])) {
      return false;
    }
  }
  return true;
}

const str = "4*no";

document.getElementById('ans').textContent = mathExpr(str);
