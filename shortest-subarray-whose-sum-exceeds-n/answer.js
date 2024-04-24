minLength = (arr, ttl) => {
  let i = 0
  let j = 0;
  let count = 2;
  let sum;
  console.log('inside')
  // subarray less than length of array
  while (count < arr.length) {
    // going through the array
    while (i < arr.length) {
      console.log(i)
      let sum = 0;
      let j = 0;
      while (j < count) {
        sum += arr[j + i];
      }
      if (sum > ttl) {
        return count;
      }
      i += count;
    }
    count++;
  }
}

const arr = [5, 8, 2, -1, 3, 4];
const ttl = 9;
document.getElementById('ans').textContent = minLength(arr, ttl);