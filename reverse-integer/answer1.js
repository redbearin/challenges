reverseInt = num => {
  const strNum = num.toString().split('').reverse().join('');
  if (num >= 0) {
    return +strNum;
  }
  return -strNum.slice(0, -1);
}
const num = -321

document.getElementById('ans').textContent = reverseInt(num);