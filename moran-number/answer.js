moran = num => {
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  let numDivSum;
  if (num % sum === 0) {
    numDivSum = num/sum;
    for (let i = 2; i < numDivSum; i++) {
      if (numDivSum % i === 0) {
        return "H"
      }
    }
    return "M";
  }
  return "Neither"
}

const num = 133;

document.getElementById('ans').textContent = moran(num);