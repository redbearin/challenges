findFulcrum = arr => {
  index = 1;
  let sumLt, sumRt;
  while (index < arr.length - 1) {
    sumLt = 0;
    sumRt = 0;
    for (let i = 0; i < index; i++) {
      sumLt += arr[i];
    }
    for (let i = index + 1; i < arr.length; i++) {
      sumRt += arr[i];
    }
    if (sumLt === sumRt) {
      return arr[index];
    }
    index++;
  }
  return -1;
}

const arr = [3, 1, 5, 2, 4, 6, -1];

document.getElementById('ans').textContent = findFulcrum(arr);