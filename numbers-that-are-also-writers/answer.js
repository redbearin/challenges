isAutobiographical = num => {
  const strNum = num.toString();
  const numCounts = {};
  // find counts for each digit
  for (let i = 0; i < strNum.length; i++) {
    if(numCounts[strNum[i]]) 
      numCounts[strNum[i]] = numCounts[strNum[i]] + 1;
    else
      numCounts[strNum[i]] = 1;
  }
  // determine is the number at a specific index
  // is the same as the count
  let count;
  for (let i = 0; i < strNum.length; i++) {
    if (!numCounts[i])
      count = '0';
    else 
      count = numCounts[i].toString();
    if(count !== strNum[i])
      return false;
  }
  return true;
}

const num = 0;

document.getElementById('ans').textContent = isAutobiographical(num);