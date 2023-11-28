const leftSide = arr => {
  let count;
  const counts = [];
    // go element by element thru array from right
  for (let i = arr.length - 1; i >= 0; i--) {
    count = 0;
    // go element by element from right,
    // starting 1 index to left of i
    for (let j = i - 1; j >= 0; j--) {
      if(arr[j] < arr[i])
        count++;
    }
    // add count to beginning of counts array
    counts.unshift(count);
  }
  return JSON.stringify(counts);
};

const rightSide = arr => {
  let count;
  const counts = [];
  // go element by element thru array from left
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    // go element by element from left,
    // starting 1 index to right of i
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[i])
        count++;
    }
    // add count to end of counts array
    counts.push(count);
  }
  return JSON.stringify(counts);
};

const arr = [5, 2, 1, 4, 8, 7];

document.getElementById('ans1').textContent = leftSide(arr);
document.getElementById('ans2').textContent = rightSide(arr);