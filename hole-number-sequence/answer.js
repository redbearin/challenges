sumOfHoles = N => {
  let strNum;
  let count = 0;
  const oneHole = ['0', '4', '6', '9'];
  for (let i = 1; i <= N; i++) {
    strNum = i.toString();
    for (let j = 0; j < strNum.length; j++) {
      if (oneHole.includes(strNum[j])) {
        count++;
      }
      if (strNum[j] === '8') {
        count += 2;
      }
    }
  }
  return count;
}

const N = 6;
document.getElementById('ans').textContent = sumOfHoles(N);