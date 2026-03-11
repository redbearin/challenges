closingInSum = num => {
  const numStr = num.toString();
  let sum = 0;
  for (let i = 0; i < Math.floor(numStr.length/2); i++) {
    sum += +(numStr[i] + numStr[numStr.length - (i+1)]);
  }
  if (numStr.length % 2) {
    sum += +numStr[Math.floor(numStr.length/2)];
  }
  return sum;
}

const num = 403672023435605;

document.getElementById('ans').textContent = closingInSum(num);