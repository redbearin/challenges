deleteOccurrences = (nums, count) => {
  // object of counts for each num
  const numCounts = {};
  // culled list
  const newList = [];
  // go num by num through nums
  for (let i = 0; i < nums.length; i++) {
    // num already in numCounts
    if (numCounts[nums[i]]) {
      numCounts[nums[i]] = numCounts[nums[i]] + 1;
    }
    // num not already in numCounts 
    else {
      numCounts[nums[i]] = 1;
    }
    // count for the num <= count
    // add to culled list
    if (numCounts[nums[i]] <= count) 
      newList.push(nums[i]);
  }
  return JSON.stringify(newList);
}

const nums = [true, true, true];
const count = 3;

document.getElementById('ans').textContent = deleteOccurrences(nums, count);