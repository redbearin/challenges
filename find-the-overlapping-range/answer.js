overlapping = ranges => {
  let low = -Infinity;
  let high = Infinity;
  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i][0] > low) {
      low = ranges[i][0];
    }
    if (ranges[i][1] < high) {
      high = ranges[i][1];
    }
  }
  if (low > high) {
    return "No overlapping";
  }
  return JSON.stringify([low, high]);
}

const ranges = [[1, 7], [2, 8], [0, 4]];

document.getElementById('ans').textContent = overlapping(ranges);