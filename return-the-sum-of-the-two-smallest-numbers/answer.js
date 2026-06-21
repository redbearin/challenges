sumTwoSmallestNums = nums => {
  nums = nums.filter(num => num > 0 );
  nums.sort((a,b) => a-b);
  return nums[0] + nums[1];
}

const nums = [2, 9, 6, -1];

document.getElementById('ans').textContent = sumTwoSmallestNums(nums);