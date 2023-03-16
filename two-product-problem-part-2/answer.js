const twoProduct = (nums, product) => {
  nums.sort((a,b) => a - b);
  // go from biggest to smallest in nums array
  for (let i = nums.length - 1; i > 0; i--) {
    // go from smallest to num before num at i
    for (let j = 0; j < i; j++) {
      // combo of two nums bigger than product
      // skip to next num
      if (nums[i] * nums[j] > product)
        break;
      // combo equiv to product
      // return two numbers in an array
      if (nums[i] * nums[j] === product)
        return JSON.stringify([nums[j], nums[i]]);
    }
  }
  // no combos
  return 'undefined';
};

const nums = [100, 12, 4, 1, 2];
const product = 15;

document.getElementById('ans').textContent = twoProduct(nums, product);