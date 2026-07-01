mostFrequent = (nums, key) => {
  const targetCts = {};
  // add target and counts to targetCts object
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      if (targetCts[nums[i + 1]])
        targetCts[nums[i + 1]] = targetCts[nums[i + 1]] + 1;
      else 
        targetCts[nums[i + 1]] = 1;
    }
  }
  // convert targetCts object to an array
  const arrTargetCts = Object.entries(targetCts);
  // the key is not present or the key is at the end
  if (!arrTargetCts.length)
    return 'no key or key at end';

  // sort the array from largest count to smallest count // return the target with the largest count
  return (arrTargetCts.sort(((a,b) => b[1] - a[1])))[0][0];
}

const nums = [2,2,2,2,3];
const key = 2;

document.getElementById('ans').textContent = mostFrequent(nums, key);