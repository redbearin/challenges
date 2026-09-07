const sumOfSlices = nums => {
  let total;
  let sum = 0;
  const sumArr = [];
    for (let i = 0; i < nums.length; i++) {
      // find total after number added
      total = sum + nums[i];
      // total with number <= 100
      if (total <= 100)
        // increase sum by total amount
        sum = total;
      // total with the number > 100
      else {
        if (i === 0) 
          sumArr.push(nums[i]);
        else {
          sumArr.push(sum);
          sum = nums[i];
        }
      }        
      // last index
      if (i === nums.length - 1)
        // add any remaining numbers 
        sumArr.push(sum);
    }
    return JSON.stringify(sumArr);
};

const nums = [13];

document.getElementById('ans').textContent = sumOfSlices(nums);