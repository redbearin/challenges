probability = (arr, num) => {
  let favOut = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      favOut++;
    }
  }
  return Math.round(100 * favOut/arr.length * 10)/10;
}

const arr = [5, 1, 8, 9];
const num = 6;

document.getElementById('ans').textContent = probability(arr, num);