dailyStreak = arr => {
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
      if (count > max) {
        max = count;
      }
    }
    else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  return max;
}

const arr = [true, true, true, false, true, true];

document.getElementById('ans').textContent = dailyStreak(arr);