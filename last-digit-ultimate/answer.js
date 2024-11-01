lastDig = (n1, n2, n3) => {
  const comb = n1 * n2;
  const combStr = comb.toString();
  const n3Str = n3.toString();
  
  return +combStr[combStr.length - 1] === +n3Str[n3Str.length - 1];
}

const n1 = 25;
const n2 = 21;
const n3 = 125;

document.getElementById('ans').textContent = lastDig(n1, n2, n3);