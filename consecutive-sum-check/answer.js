consecutiveSum = num => {
  let sum;
  for (let i = 1; i <= Math.ceil(num/2); i++) {
    sum = 0;
    for (let j = i; j <= Math.ceil(num/2); j++) {
      sum += j;
      if (sum === num) {
        return true;
      }
      if (sum > num) {
        break;
      }
    }
  }
  return false;
}

num = 13;

document.getElementById('ans').textContent = consecutiveSum(num);