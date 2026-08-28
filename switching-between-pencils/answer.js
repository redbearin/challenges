colorPatternTimes = arr => {
  let sum = arr.length * 2;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      sum++;
    }
  }
  return sum;
}

const arr = ["Blue", "Blue", "Blue", "Red", "Red", "Red"];

document.getElementById('ans').textContent = colorPatternTimes(arr);