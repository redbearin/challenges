getFrequencies = arr => {
  // object to hold counts
  const counts = {};
  // go element by by element thru arr
  for (let i = 0; i < arr.length; i++) {
    // element already in counts obj
    if (counts[arr[i]])
      // increment the count for element
      counts[arr[i]] = counts[arr[i]] + 1;
    // element not in counts obj
    else 
      // add element to counts obj
      counts[arr[i]] = 1;
  }
  return JSON.stringify(counts);
}

const arr = [];

document.getElementById('ans').textContent = getFrequencies(arr);