findLargestNums = (arr) => {
  const maxNums = [];
  for (let i = 0; i < arr.length; i++) {
    maxNums.push(Math.max(...arr[i]));
  }
  return JSON.stringify(maxNums);
}

const arr = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];

document.getElementById('ans').textContent = findLargestNums(arr);