sockPairs = str => {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    counts[str[i]]?
    counts[str[i]]++ :
    counts[str[i]] = 1;
  }
  let pairs = 0;
  for (let key in counts) {
    pairs += Math.floor(counts[key]/2);
  }
  return pairs;
}

const str = "CABBACCC";

document.getElementById('ans').textContent = sockPairs(str);
