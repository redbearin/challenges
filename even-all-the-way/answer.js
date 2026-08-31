getOnlyEvens = arr => {
  const evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return JSON.stringify(evens);
}

const arr = [1, 3, 2, 6, 4, 8];

document.getElementById('ans').textContent = getOnlyEvens(arr);