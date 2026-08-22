const happy = n => {
  if (n == 1) {
    return true ;
  }
  if (n == 4) {
    return false;
  }
  const nStr = n.toString();
  let sum = 0;
  for (let i = 0; i < nStr.length; i++) {
    sum += + Math.pow(nStr[i], 2);
  }
  return happy(sum);
};

const n = 203;

document.getElementById('ans').textContent = happy(n);

portionHappy = nums => {
  let happyCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i-1] || nums[i] === nums[i+1])
      happyCount++;
  }
  return happyCount/nums.length;
}

const nums = [0, 1, 1, 0];

document.getElementById('ans').textContent = portionHappy(nums);
