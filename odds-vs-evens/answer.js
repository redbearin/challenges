oddsVsEvens = num => {
  const strNum = num.toString();
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < strNum.length; i++) {
    +strNum[i] % 2 ?
      oddSum += +strNum[i] :
      evenSum += +strNum[i];
  }
  if (oddSum > evenSum) {
    return 'odd';
  }
  if (evenSum > oddSum) {
    return 'even';
  }
  return 'equal';
}

const num = 97428;

document.getElementById('ans').textContent = oddsVsEvens(num);