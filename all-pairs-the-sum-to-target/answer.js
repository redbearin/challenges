allPairs = (arr, sum) => {
  let pairs = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairs.push([arr[i], arr[j]].sort());
      }
    }
  }
  return JSON.stringify(pairs.sort((a,b) => a[0] - b[0]));
}

const arr = [4, 5, 1, 3, 6, 8];
const sum = 9;

document.getElementById('ans').textContent = 
allPairs(arr, sum);
