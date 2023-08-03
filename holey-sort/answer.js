holeySort = arr => {
  withCounts = [];
  const oneHole = ['0', '4', '6', '9'];
  let numStr, count;
  for (let i = 0; i < arr.length; i++) {
    numStr = arr[i].toString();
    count = 0;
    for (let j = 0; j < numStr.length; j++) {
      if (numStr[j] === '8') {
        count += 2;
      }
      if (oneHole.includes(numStr[j])) {
        count++;
      }
    }
    withCounts.push([arr[i], count]);
  }
  withCounts.sort((a,b) => a[1] - b[1]);
  const holeySorted = [];
  for (let i = 0; i < withCounts.length; i++) {
    holeySorted.push(withCounts[i][0])
  }
  return JSON.stringify(holeySorted);
}

const arr = [100, 888, 1660, 11];

document.getElementById('ans').textContent = holeySort(arr);

