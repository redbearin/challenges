duplicates = str => {
  const counts  = {};
  for (let i = 0; i < str.length; i++) {
    counts[str[i]] ?
    counts[str[i]]++ :
    counts[str[i]] = 1;
  }
  let dups = 0;
  const arr = Object.entries(counts).sort((a,b) => b[1] - a[1]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] < 2) {
      break;
    }
    dups += arr[i][1] -1;
  }
  return dups;
}

const str = "The Quick Brown Fox Jumps Over the Lazy Dog";

document.getElementById('ans').textContent = duplicates(str);