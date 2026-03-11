duplicateNums = arr => {
  const dups = [];
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]]?
      dups.push(arr[i]):
      counts[arr[i]] = 1;
  }
  return !dups.length?
    null:
    JSON.stringify(dups.sort((a,b) => a-b));
}

const arr = [81, 72, 43, 72, 81, 99, 99, 100, 12, 54];

document.getElementById('ans').textContent = duplicateNums(arr);