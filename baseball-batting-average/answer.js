battingAvg = arr => {
  let hits = 0;
  let atBat = 0;
  for (let i = 0; i < arr.length; i++) {
    hits += arr[i][0];
    atBat += arr[i][1];
  }
  return (hits/atBat).toFixed(3).slice(1);
}

const arr = [[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]];

document.getElementById('ans').textContent = battingAvg(arr);