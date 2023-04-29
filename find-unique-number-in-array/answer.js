findSingleNumber = arr => {
  if (!arr.length) {
    return null;
  }
  const counts = {}
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    }
    else {
      counts[arr[i]] = 1;
    }
  }
  console.log(counts)
  return +Object.entries(counts).sort((a, b) => a[1] - b[1])[0][0];
}

const arr = [415];

document.getElementById('ans').textContent = findSingleNumber(arr);