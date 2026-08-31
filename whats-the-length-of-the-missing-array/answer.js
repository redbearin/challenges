findMissing = arr => {
  if (arr === null || !arr.length) {
    return false;
  }
  arr.sort((a,b) => a.length - b.length);
  if (!arr[0].length) {
    return false;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length !== arr[i-1].length + 1) {
      return arr[i-1].length + 1;
    }
  }
}

const arr = null;

document.getElementById('ans').textContent = findMissing(arr);