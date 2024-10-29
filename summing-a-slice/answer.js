sliceSum = (nums, slice) => {
  let sum = 0;
  for (let i = 0; i < slice; i++) {
    if (i > nums.length - 1) {
      break;
    }
    sum += nums[i];
  }
  return sum;
}

const nums = [1, 3, 2];
const slice = 2;

document.getElementById('ans').textContent = sliceSum(nums, slice);