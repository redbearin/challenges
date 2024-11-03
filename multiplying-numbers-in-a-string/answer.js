multiplyNums = nums => {
  return nums.split(', ').reduce((val, acc) => acc * val, 1);
}

const nums = "10, -2";

document.getElementById('ans').textContent = multiplyNums(nums);