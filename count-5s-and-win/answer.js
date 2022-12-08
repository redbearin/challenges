getLuckiest = arr => {
  if (!arr.length)
    return null;

  let highestFiveCount = 0;
  let numFiveCount, 
      strNum, 
      numWithHighestFiveCt;
    
  for (let i = 0; i < arr.length; i++) {
    strNum = arr[i].toString();
    numFiveCount = 0;
    for (let j = 0; j < strNum.length; j++) {
      if (strNum[j] === '5') {
        numFiveCount++;
      }
    }
    if (numFiveCount > highestFiveCount) {
      numWithHighestFiveCt = arr[i];
      highestFiveCount = numFiveCount;
    }
    if (numFiveCount === highestFiveCount &&
        arr[i] > numWithHighestFiveCt) {
      numWithHighestFiveCt = arr[i];    
    }
  }

  if (!numWithHighestFiveCt)
    return arr[0];

  return numWithHighestFiveCt;
}

const arr = [5, 12, 55, 11];

document.getElementById('ans').textContent = getLuckiest(arr);