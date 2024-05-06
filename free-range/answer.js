numbersToRanges = arr => {
  let first = arr[0];
  const ranges = [];
  for (let i = 1; i < arr.length; i++) {
    if (i === arr.length - 1) {
      if (first === arr[i]) {
        ranges.push(arr[i].toString());
      }
      else {
        ranges.push(first.toString() + '-' + arr[i].toString());
      }
    }
    else if (arr[i] !== arr[i - 1] + 1) {
      if (first === arr[i - 1]) {
        ranges.push(first.toString());
        first = arr[i];
      }
      else {
        ranges.push(first.toString() + '-' + arr[i-1].toString());
        first = arr[i];
      }
    }
  }
  return ranges;
}
const arr = [3, 4, 5, 10, 11, 12];

document.getElementById('ans').textContent = numbersToRanges(arr);