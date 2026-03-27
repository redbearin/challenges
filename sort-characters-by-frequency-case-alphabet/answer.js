frequencySort = str => {
  const ltrCounts = {};
  const countLtrs = {};
  // build object of letters and counts
  // associated with each letter
  for (let i = 0; i < str.length; i++) {
    if (ltrCounts[str[i]])
    ltrCounts[str[i]] = ltrCounts[str[i]] + 1;
    else
    ltrCounts[str[i]] = 1;
  }
  // build object of counts and letters associated
  // with those counts
  for (key in ltrCounts) {
    if (countLtrs[ltrCounts[key]])
      countLtrs[ltrCounts[key]].push(key);
    else
    countLtrs[ltrCounts[key]] = [key];
  }
  // sort the letters associated with each count
  for (let key in countLtrs) {
    countLtrs[key].sort();
  }
  // create array of counts and sorted letters 
  // associated with each count
  const countLtrsArr = Object.entries(countLtrs);
  // put highest counts first
  countLtrsArr.sort((a,b) => b[0] - a[0]);

  const orderedArr = [];
  // build an array of letters 
  // most often, order of alphabet (cap before lowercase)
  for (let i = 0; i < countLtrsArr.length; i++) {
    for (let j = 0; j < countLtrsArr[i][1].length; j++) {
      for (let k = 0; k < +countLtrsArr[i][0]; k++)
        orderedArr.push(countLtrsArr[i][1][j]);
    }
  }
  return orderedArr.join('');
}

const str = "Aabb";

document.getElementById('ans').textContent = frequencySort(str);

