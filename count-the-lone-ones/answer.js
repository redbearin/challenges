countLoneOnes = num => {
  let count = 0;
  const strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === '1' && 
        strNum[i-1] !== '1' && 
        strNum[i + 1] !== '1') {
      count++;
    }
  }
  return count;
}

const num = 1191;

document.getElementById('ans').textContent = countLoneOnes(num);