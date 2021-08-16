const coveredIntegers = (arr) => {
  // array of all numbers
  const nums = [];
  // go subarray by subarray through array
  for (let i = 0; i < arr.length; i++) {
    // get each number in subarray
    // and add it to nums array
    for (let j = arr[i][0]; j <= arr[i][1]; j++) {
      nums.push(j);
    }
  }
  // remove duplicates and get count
  return [...new Set(nums)].length;
};

const arr = [[1, 2], [1, 2]];

document.getElementById('ans').textContent = coveredIntegers(arr);