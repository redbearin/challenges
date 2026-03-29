nDifferences = arr => {
  let priorArr = arr;
  let newArr;
  while (priorArr.length > 1) {
    newArr = [];
    for (let i = 1; i < priorArr.length; i++) {
      newArr.push(priorArr[i] - priorArr[i-1]);
    }
    priorArr = newArr;
  }
  return priorArr[0];
}

const arr = [5, 8, 8];

document.getElementById('ans').textContent = nDifferences(arr);