mirror = arr => {
  for (let i = arr.length - 2; i >= 0; i--) {
    arr.push(arr[i]);
  }
  return JSON.stringify(arr);
}
const arr = [3, 5, 6, 7, 8];

document.getElementById('ans').textContent = mirror(arr);