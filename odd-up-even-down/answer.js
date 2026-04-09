transform = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? arr[i] = arr[i] + 1 : arr[i] = arr[i] - 1;
  }
  return JSON.stringify(arr);
}

const arr = [1, 2, 3, 4, 5]

document.getElementById('ans').textContent = transform(arr);