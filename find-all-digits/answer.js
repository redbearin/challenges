findAllDigits = nums => {
  let digits = [0,1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < nums.length; i++) {
    let strNum = nums[i].toString();
    for (let j = 0; j < strNum.length; j++) {
      if (digits.includes(+strNum[j])) 
        digits.splice(digits.indexOf(+strNum[j]), 1);
      if (digits.length === 0)
        return nums[i];
    }
  }
  return "Missing digits!"
}

const nums = [4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868];

document.getElementById('ans').textContent = findAllDigits(nums);