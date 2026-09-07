searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      return i;
    }
  }
}

const nums = [1,3,5,6];
const target = 2;

document.getElementById('ans').textContent = searchInsert(nums, target);