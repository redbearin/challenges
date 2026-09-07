minDifferencePair = arr => {
  let minDiff = Infinity;
  let smallestSum, lowestPair;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (minDiff > Math.abs(arr[i] - arr[j])) {
        minDiff = Math.abs(arr[i] - arr[j]);
        lowestPair = [arr[i], arr[j]];
        smallestSum = arr[i] + arr[j];
      }
      if (minDiff === Math.abs(arr[i] - arr[j]) && 
          smallestSum > arr[i] + arr[j]) {
        lowestPair = [arr[i], arr[j]];
        smallestSum = arr[i] + arr[j];
      }
    }
  }
  return JSON.stringify(lowestPair.sort((a,b) => a-b));
}

const arr = [32, 33, 4, 6, 48, 18, 20, -7, -4, 31];

document.getElementById('ans').textContent = minDifferencePair(arr);