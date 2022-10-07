isPositiveDominant = arr => {
  // remove duplicates and sort highest to lowest
  sortedArr = [...new Set(arr)].sort((a,b) => b-a);
  let len = arr.length;
  posNumCount = 0;
  for (let i = 0; i < sortedArr.length; i++)  {
    // break out of loop if you reach a neg num
    if (sortedArr[i] < 0)
      break;
    // eliminate 0s from comparison
    if (sortedArr[i] === 0)
      len--;
    // positive number count
    if (sortedArr[i] > 1)  
      posNumCount++;
  }
  // more positives than negatives
  if (posNumCount > len / 2)
    return true;
  // more negatives than positives
  return false;
}

const arr = [0, -4, -1];

document.getElementById('ans').textContent = isPositiveDominant(arr);