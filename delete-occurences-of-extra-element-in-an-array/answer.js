const deleteOccurrences = (arr, occ) => {
  const eleCounts = {};
  const newArr = [];
  // go element by element thru arr
  for (let i = 0; i < arr.length; i++) {
    // first time element seen
    if (!eleCounts[arr[i]])
      eleCounts[arr[i]] = 1;
    // element seen earlier in arr
    else
      eleCounts[arr[i]] += 1;
    // number of time element seen 
    // less than or equal to limit
    if (eleCounts[arr[i]] <= occ)
      newArr.push(arr[i]);
  }
  return JSON.stringify(newArr);
};

const arr = [true, true, true];
const occ = 3;

document.getElementById('ans').textContent = deleteOccurrences(arr, occ);