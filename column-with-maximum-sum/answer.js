colWithMaxSum = (nums, n) => {
  const newArr = [];
  let sub;
  let i = 0;
  while (i < nums.length - 1)  {
    sub = [];
    for (let j = i; j < n + i; j++) {
      sub.push(nums[j]);
    }
    newArr.push(sub);
    i += n;
  }
  let sum;
  let biggest = -Infinity;
  let idx;
  //column
  for (let i = 0; i < newArr[0].length; i++) {
    sum = 0;
    //row
    for (let j = 0; j < newArr.length; j++) {
      sum += newArr[j][i];
    }
    if (sum > biggest) {
      biggest = sum;
      idx = i;
    }
  }
  return idx + 1;
}

const nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19];
const n = 4;

document.getElementById('ans').textContent = colWithMaxSum(nums, n) 