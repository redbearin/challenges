findMissing  = arr => {
  // empty arr
  if (!arr.length)
    return false;
  // initialize an arr to hold 
  // subarray lengths
  const subArrLengths = [];
  // add length of each subarray to
  // the subArrLengths array
  for (let i = 0; i < arr.length; i++) {
    subArrLengths.push(arr[i].length);
  }
  // sort subArrLengths array
  subArrLengths.sort((a,b) => a-b);
  // empty subarray
  if (!subArrLengths[0])
    return false;
  // compare lengths until missing is found
  for (let i = 1; i < subArrLengths.length; i++) {
    if (subArrLengths[i] !== subArrLengths[i - i] + 1) {
      return subArrLengths[i-1] + 1;
    }
  }
}

const arr = [[4, 4, 4, 4], [1], [3, 3, 3]];

document.getElementById('ans').textContent = findMissing(arr);