sumRound = num => {
  const strNum = "" + num;
  let zeroes = 0;
  let sumRds = '';
  for (let i = strNum.length - 1; i>= 0; i--) {
    if (strNum[i] !== '0') {
      sumRds += strNum[i] + '0'.repeat(zeroes) + ' ';
    }
    zeroes++;
  }
  return sumRds.trim();
}

const num = 54210;

document.getElementById('ans').textContent = sumRound(num);