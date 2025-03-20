selfDescriptive = num => {
  const numStr = num.toString();
  if (numStr.length % 2) {
    return false;
  }
  numGroups = {};
  numCounts = {};
  for (let i = 1; i < numStr.length; i += 2) {
    numGroups[numStr[i]] = +numStr[i - 1];
  }
  for (let i = 0; i < numStr.length; i++) {
    if (numCounts[numStr[i]]) 
      numCounts[numStr[i]] += 1;
    else 
      numCounts[numStr[i]] = 1;
  }
  for (let key in numGroups) {
    if (numGroups[key] !== numCounts[key]) {
      return false;
    }
  }
  return true;
}

const num = 3133141;

document.getElementById('ans').textContent = selfDescriptive(num);