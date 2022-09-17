const largestGap = arr => {
  arr.sort((a,b) => a-b);
  let maxGap = 0;
  let gap;
  for (let i = 1; i < arr.length; i++) {
    gap = arr[i] - arr[i-1];
    if (gap > maxGap) 
      maxGap = gap;
  }
  return maxGap;
};

const arr = [13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9];

document.getElementById('ans').textContent = largestGap(arr);