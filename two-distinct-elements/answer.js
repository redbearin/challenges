returnUnique = arr => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ?
    obj[arr[i]] += 1 :
    obj[arr[i]] = 1;
  }
  const noRep = [];
  for (key in obj) {
    if (obj[key] === 1) {
      noRep.push([+key,arr.indexOf(+key)]);
    }
  }
  noRep.sort((a,b) => a[1] - b[1]);
  const onlyEle = [];
  for (let i = 0; i < noRep.length; i++) {
    onlyEle.push(noRep[i][0]);
  }
  return JSON.stringify(onlyEle);
}

const arr = [1, 9, 8, 8, 7, 6, 1, 6]

document.getElementById('ans').textContent = returnUnique(arr);