getFrequencies = arr => {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] ?
    counts[arr[i]]++ :
    counts[arr[i]] = 1;
  }
  return JSON.stringify(counts);
}

const arr = [true, false, true, false, false];

document.getElementById('ans').textContent = getFrequencies(arr);