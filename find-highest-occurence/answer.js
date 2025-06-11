highestOccurrence = arr => {

  let countsNum = {};
  let countsStr = {};
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      if (countsNum[arr[i]])
        countsNum[arr[i]] += 1;
      else {
        countsNum[arr[i]] = 1;
      }
    }
    else {
      if (countsStr[arr[i]])
        countsStr[arr[i]] += 1;
      else {
        countsStr[arr[i]] = 1;
      }
    }
  }

  const countsNumArr = Object.entries(countsNum);
  for (let i = 0; i < countsNumArr.length; i++) {
    countsNumArr[i][0] = +countsNumArr[i][0];
  }

  const countsStrArr = Object.entries(countsStr);
  const combinedArr = countsNumArr.concat(countsStrArr).sort((a, b) => b[1]-a[1]);

  const highestOccur = [combinedArr[0][0]];

  for (let i = 1; i < combinedArr.length; i++) {
    if (combinedArr[0][1] === combinedArr[i][1])
      highestOccur.push(combinedArr[i][0])
  }
  return JSON.stringify(highestOccur);
}

const arr = ["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"];

document.getElementById('ans').textContent = highestOccurrence(arr);