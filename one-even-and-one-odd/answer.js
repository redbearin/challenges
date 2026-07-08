oneOddOneEven = num => {
  const strNum = num.toString();
  if (+strNum[0]%2 === 0 && +strNum[1] % 2 !== 0 ||
      +strNum[1]%2 === 0 && +strNum[0] % 2 !== 0 ) {
    return true;
  }
  return false;
}
const num = 55;

document.getElementById('ans').textContent = oneOddOneEven(num);