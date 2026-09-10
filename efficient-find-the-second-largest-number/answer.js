secondLargest = arr => {
  if (arr.length <= 1) {
    return null;
  }

  let lar = -Infinity;
  let sec = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lar) {
      sec = lar;
      lar = arr[i];
    }
    else if (arr[i] > sec && arr[i] !== lar) {
      sec = arr[i];
    }
  }
  if (sec === -Infinity) {
    return null;
  }
  return sec;
}

const arr = [10, 10, 5];

document.getElementById('ans').textContent = secondLargest(arr);