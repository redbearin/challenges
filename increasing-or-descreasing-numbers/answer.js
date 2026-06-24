incDec = n => {
  let count = 0;
  for (let i = 1; i <= Math.pow(10, n); i++) {
    let numStr = i.toString();
    let numStrArr = numStr.split('');
    let numStrArr2 = [...numStrArr];
    if (numStrArr.sort((a,b) => a-b).join('') ===  numStr ||    
    numStrArr2.sort((a,b) => b-a).join('') === numStr) {
      count++;
    }
  }
  return count;
}

const n = 2;

document.getElementById('ans').textContent = incDec(n);