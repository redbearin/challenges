miniPeaks = arr => {
  const peaks = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i])
      peaks.push(arr[i]);
  }
  return JSON.stringify(peaks);
}

const arr = [4, 5, 2, 1, 4, 9, 7, 2];

document.getElementById('ans').textContent = miniPeaks(arr);