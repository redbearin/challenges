const removeLeadingTrailing = num => {
  let numArr = num.split('.');
  let firstHalf;

  if (numArr[0][0] !== '0') 
    firstHalf = numArr[0];
  else {
    for (let i = 1; i < numArr[0].length; i++) {
      if (numArr[0][i] !== '0') {
        firstHalf = numArr[0].slice(i);
        break;
      }
    }
  }

  if (numArr.length === 1) 
    return firstHalf;

  let secondHalf;
  if (numArr[1][numArr[1].length - 1] !== '0')
    return firstHalf + '.' + numArr[1];
  else {
    for (let i = numArr[1].length - 2; i >= 0; i--) {
      if (numArr[1][i] !== '0') {
        secondHalf = numArr[1].slice(0, i + 1);
        break;
      }
      if (i === 0 && numArr[1][i] === '0')
        return firstHalf;
    }
  }
  return firstHalf + '.' + secondHalf;
}

const num = "30";

document.getElementById('ans').textContent = removeLeadingTrailing(num);