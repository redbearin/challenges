isGoodMatch = arr => {
  const sums = [];
  if (arr.length % 2) {
    return "bad match";
  }
  for (let i = 1; i < arr.length; i += 2) {
    sums.push(arr[i] + arr[i-1]);
  }
  return JSON.stringify(sums);
}

const arr = [1, 2, 4, 7];

document.getElementById('ans').textContent = isGoodMatch(arr);