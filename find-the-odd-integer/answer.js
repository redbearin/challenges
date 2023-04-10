findOdd = nums => {
  const counts = {};
  for (let i = 0; i < nums.length; i++) {
    if (counts[nums[i]]) 
      counts[nums[i]] += 1;
    else
      counts[nums[i]] = 1;      
  }
  console.log(counts)
  for (let num in counts) {
    if (counts[num] % 2 !== 0)
      return num;
  }
}

const nums = [10];

document.getElementById('ans').textContent = findOdd(nums);