sumTwoSmallestNums = nums => {
  // sort numbers
  nums.sort((a,b) => a-b);
  let idxFirstPos;
  // identify first positive number
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      idxFirstPos = i;
      break;
    }
  }
  // remove negative numbers
  if (idxFirstPos > 0)
    nums = nums.slice(idxFirstPos);
  // add two smallest numbers
  return nums[0] + nums[1];
}

const nums = [3683, 2902, 3951, -475, 1617, -2385];

document.getElementById('ans').textContent = sumTwoSmallestNums(nums);