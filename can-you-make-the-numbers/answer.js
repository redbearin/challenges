canBuild = (digits, nums) => {
  const digitCounts = {};
  for (let i = 0; i < digits; i++) {
    if(digitsCounts[digits[i]])
      digitsCounts[digits[i]] = digitsCounts[digits[i]] + 1;
    else
      digitsCounts[digits[i]] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    let strNum = nums[i].toString();
    for (let j = 0; j < strNum.length; j++) {
      if (digits[strNum[j]])
        digits[strNum[j]] = digits[strNum[j]];
      else
        return false;
    }
  }
  return true;
}
const digits = [0, 1, 2, 2, 3, 0, 0, 0, 1, 1];
const nums = [123, 444, 92];

document.getElementById('ans').textContent = canBuild(digits, nums);