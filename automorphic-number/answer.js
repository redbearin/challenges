automorphic = num => {
  const strSqr = "" + num ** 2;
  const strNum = "" + num;
  return strSqr.slice(-strNum.length) === strNum;
}
const num = 6;

document.getElementById('ans').textContent = automorphic(num);