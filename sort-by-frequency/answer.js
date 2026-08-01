sortFreq = arr => {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] ?
    counts[arr[i]] += 1 :
    counts[arr[i]] = 1;
  }
  const countsArrSort = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  let str = "";
  for (let i = 0; i < countsArrSort.length; i++) {
    str += countsArrSort[i][0].repeat(+countsArrSort[i][1])
  }
  return JSON.stringify(str.split('').map(ele => { 
    return parseInt(ele, 10); 
  }));
}

const arr = [2, 3, 5, 3, 7, 9, 5, 3, 7];

document.getElementById('ans').textContent = sortFreq(arr);