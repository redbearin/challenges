funnyNumbers = (n, p) => {
  strNum = n.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += Math.pow(+strNum[i], i + p);
  }
  if (Number.isInteger(sum/n)) 
    return sum/n;
  return null;
}

const n = 92;
const p = 1;

document.getElementById('ans').textContent = funnyNumbers(n, p);