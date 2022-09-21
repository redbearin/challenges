oddSort = nums => {
  const odds = [];
  // mark odd locations in nums array
  // place each odd num in odds array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      odds.push(nums[i]);
      nums[i] = '*';
    }
  }
  // no odds
  if (odds.length === 0) 
    return JSON.stringify(nums);

  odds.sort((a,b) => a - b);
  
  // all odds
  if (odds.length === nums.length)
    return JSON.stringify(odds);

  // odds and evens
  let count = 0;
  // for each marked location in nums array
  // place odd number in ascending order
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === '*') {
      nums[i] = odds[count];
      count++;
    }
  }
  return JSON.stringify(nums);
}

const nums = [7, 5, 2, 3, 1];

document.getElementById('ans').textContent = oddSort(nums);