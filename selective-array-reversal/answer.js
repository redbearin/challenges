const selReverse = (arr, groupSize) => {
  if (!groupSize)
    return JSON.stringify(arr);

  // intialize the new array;
  const newArr = [];
  // initialize the variable that will hold last index for group
  let lastGrpIdx;
  // go from first element of a group to next element of a group
  for (let arrIdx = 0; arrIdx < arr.length; arrIdx += groupSize) {
    // set the last index of the group
    lastGrpIdx = arrIdx + groupSize - 1;
    // last group index bigger than length of arr
    if (lastGrpIdx > arr.length - 1)
      // make last group index the last element in arr
      lastGrpIdx = arr.length - 1;
    // return elements in group in reverse order
    for (let grpIdx = lastGrpIdx; grpIdx >= arrIdx; grpIdx--) {
        newArr.push(arr[grpIdx]);
    }
  }
  
  return JSON.stringify(newArr);
};

const groupSize = 0;
const arr = [1,2,3,4,5,6];

document.getElementById('ans').textContent = selReverse(arr, groupSize);