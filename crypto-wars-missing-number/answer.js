decrypt = arr => {
  arr.sort((a,b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 !== arr[i-1]) {
      return String.fromCharCode(arr[i] - 1 + 64);
    }
  }
}
const arr = [19, 12, 14, 21, 22, 3, 11, 20, 9, 16, 24, 17, 2, 10, 13, 18, 7, 8, 4, 5, 1, 6, 25, 23, 26];

document.getElementById('ans').textContent = decrypt(arr);