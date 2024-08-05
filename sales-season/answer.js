discount = arr => {
  if (arr.length > 2) {
    const numFree = Math.floor(arr.length / 3);
    let free = 0;
    const sortedArr = [...arr].sort((a, b) => a - b);
    for (let i = 0; i < numFree; i++) {
      free += sortedArr[i];
    }
    const total = arr.reduce((ele, acc) => ele + acc);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.round((arr[i] - arr[i] / total * free) * 100) / 100;
    }
  }
  return JSON.stringify(arr);
}
const arr = [5.75, 14.99, 36.83, 12.15, 25.30, 5.75, 5.75, 5.75];

document.getElementById('ans').textContent = discount(arr);