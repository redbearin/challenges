longestStreak = arr => {
  if (arr.length <= 1) {
    return arr.length === 1 ? 1 : 0;
  }
  
  let maxCount = 0;
  let total = 1;
  let diff;
  for (let i = 1; i < arr.length; i++) {
    diff = Math.abs((new Date(arr[i].date) - new Date(arr[i-1].date)) / (1000 * 60 * 60 * 24));
    if (diff === 1) {
      total++;
      if (i === arr.length - 1) {
        if (total > maxCount) {
          maxCount = total;
        }
      }
    }
    else {
      if (total > maxCount) {
        maxCount = total;
      }
      total = 1;
    }
  }
  return maxCount;
}

const arr = [
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-20"
  },
  {
    "date": "2019-09-26"
  },
  {
    "date": "2019-09-27"
  },
  {
    "date": "2019-09-30"
  }
];

document.getElementById('ans').textContent = longestStreak(arr);