const happy = n => {
  if (n == 1) {
    return true ;
  }
  if (n == 4) {
    return false;
  }
  const nStr = n.toString();
  let sum = 0;
  for (let i = 0; i < nStr.length; i++) {
    sum += + Math.pow(nStr[i], 2);
  }
  return happy(sum);
};

const n = 203;

document.getElementById('ans').textContent = happy(n);