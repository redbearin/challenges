 largestNumbers = (lim, arr) => {
    const largest = [];
    arr.sort((a,b) => b - a);
    for (let i = 0; i < lim; i++) {
      largest.unshift(arr[i]);
    }
    return JSON.stringify(largest);
 }

const lim = 3;
const arr = [14, 12, 57, 11, 18, 16];

document.getElementById('ans').textContent = largestNumbers(lim, arr);