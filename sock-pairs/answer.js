const sockPairs = socks => {
  const typeCounts = {};
  let pairs = 0;
  // build counts of each sockType
  for (let i = 0; i < socks.length; i++) {
    if(typeCounts[socks[i]])
      typeCounts[socks[i]] += 1;
    else 
    typeCounts[socks[i]] = 1;
  }
  // go thru all sock types in 
  // typeCount object and build pairs
  for (let sockType in typeCounts) {
    pairs += Math.floor(typeCounts[sockType] / 2);
  }
  return pairs;
}

const socks = "AA";

document.getElementById('ans').textContent = sockPairs(socks);