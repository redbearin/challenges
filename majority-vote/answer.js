majorityVote = arr => {
  if (!arr.length) {
    return null;
  }
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    !counts[arr[i]] ?
      counts[arr[i]] = 1:
      counts[arr[i]]++;
      
    if (counts[arr[i]] > arr.length / 2) {
      return arr[i];
    }
  }
  return null;
}

const arr = ["A", "A", "B"];

document.getElementById('ans').textContent = majorityVote(arr);