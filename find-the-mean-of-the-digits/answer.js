mean = num => {
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  return sum/strNum.length;
}
const num = 12345;

document.getElementById('ans').textContent = mean(num);