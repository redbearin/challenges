mode = arr => {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]]?
    counts[arr[i]]++ :
    counts[arr[i]] = 1;
  }
  const countsArrSt = Object.entries(counts).sort((a,b) => b[1] - a[1]);
  const modes = [+countsArrSt[0][0]];
  for (let i = 1; i < countsArrSt.length; i++) {
    if (countsArrSt[i][1] === countsArrSt[i - 1][1]) {
      modes.push(+countsArrSt[i][0]);
    }
    else {
      break;
    }
  }
  return JSON.stringify(modes);
}

const arr = [1, 2, 2, 3, 6, 6, 7, 9];
 
document.getElementById('ans').textContent = mode(arr);