canBuild = (digitCounts, nums) => {
  // go through each digit in the multi-digit 
  // reduce count for that digit
  // if no digit, return false
  for (let i = 0; i < nums.length; i++) {
    let strNum = nums[i].toString();
    for (let j = 0; j < strNum.length; j++) {
      if (digitCounts[strNum[j]])
        digitCounts[strNum[j]] = digitCounts[strNum[j]] - 1;
      else
        return false;
    }
  }
  return true;
}

const digitCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const nums = [3];

document.getElementById('ans1').textContent = canBuild(digitCounts, nums);