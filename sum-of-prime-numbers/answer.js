sumPrimes = nums => {
  let sum = 0;
  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    flag = false;
		if (nums[i] === 1) {
			flag = true;
		}
    for (let j = 2; j <= nums[i] / 2; j++) {
      if (nums[i] % j === 0) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      sum += nums[i];
    }
  }
  return sum;
}

const nums = [2, 3, 4, 11, 20, 50, 71];

document.getElementById('ans').textContent = sumPrimes(nums);