greaterThanSum = nums => {
  let sum = nums[0];
  // compare current number to sum of all
  // prior numbers
  for (let i = 1; i < nums.length; i++) {
    // number is bigger than sum of prior
    if (nums[i] > sum)
      sum += nums[i];
    // number is NOT bigger than sum of prior
    else
      return false;
  }
  return true;
}

const nums = [1, 2, 4, 6, 13];

document.getElementById('ans').textContent = greaterThanSum(nums);