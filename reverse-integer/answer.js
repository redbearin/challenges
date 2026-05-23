reverseInt = num => {
  const strNum = num.toString().split('').reverse().join('');
  if (num < 0) {
    return -strNum.slice(0, -1);
  }
  return +strNum;
}
const num = -321

document.getElementById('ans').textContent = reverseInt(num);