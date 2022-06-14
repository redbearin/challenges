countRepetitions = arr => {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]])
      counts[arr[i]] = counts[arr[i]] + 1;
    else 
      counts[arr[i]] = 1;
  }
  const sorted = Object.entries(counts)
  .sort(([,a],[,b]) => b-a).reduce((_sortedObj, [k,v]) => ({
    ..._sortedObj, 
    ["" + k]: v
  }), {})
  return JSON.stringify(sorted);
}

const arr = [1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0];

document.getElementById('ans').textContent = countRepetitions(arr);
