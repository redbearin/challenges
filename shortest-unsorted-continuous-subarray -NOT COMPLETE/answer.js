findUnsortedSubarray = arr => {
  const sortedArr = arr.concat().sort((a,b) => a-b);
  
  const matchIdx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sortedArr[i])
      matchIdx.push(i);
  }
  console.log(arr)
  console.log(sortedArr)
  console.log(matchIdx)
  let endIdx;
  for (let i = matchIdx.length; i >= 0; i--) {
    if (matchIdx[i] - 1 === matchIdx[i -1]) {
      console.log('inside continue')
      continue;
    }
    else {
      if(!endIdx) {
        endIdx = matchIdx[i];
      }
    }
  }
  if (matchIdx.length === 0)
    return arr.length;
  if (matchIdx.length === 1 && 
      matchIdx === 0 || matchIdx === arr.length - 1)
    return arr.length - 1;
  else 
    return endIdx - 1 - matchIdx[0];
}
const arr = [2, 4, 4, 4, 4, 3];

document.getElementById('ans').textContent = findUnsortedSubarray(arr);
