countPosSumNeg = nums => {
  // empty nums array
  if (!nums.length)
    return '[]';
  let posCount = 0;
  let negSum = 0;
  //count positive nums
  //sum negative numbers (include zero because no impact)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0)
      negSum += nums[i];
    else
      posCount++;
  }
  return '[' + posCount + ', ' + negSum + ']';
};

const nums = [91, -4, 80, -73, -28];

document.getElementById('ans').textContent = countPosSumNeg(nums);