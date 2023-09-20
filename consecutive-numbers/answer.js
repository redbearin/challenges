cons = arr => {
  arr.sort((a,b) => a-b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1] + 1) {
      return false;
    }
  }
  return true;
}

const arr = [5, 1, 4, 3, 2, 8];

document.getElementById('ans').textContent = cons(arr);