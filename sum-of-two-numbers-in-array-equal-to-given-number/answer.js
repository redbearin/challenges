checkSum = (arr, num) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true;
      }
    }
  }
  return false;
}

const arr = [10, 12, 4, 7, 9, 11];
const num = 16;

document.getElementById('ans').textContent = checkSum(arr, num);