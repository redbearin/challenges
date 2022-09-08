const pop = arr => {
  // index that contains balloon
  const index = arr.findIndex(element => element > 0);
  // size of the balloon
  const size = arr[index];
  // modify array elements based on
  // distance from the popped balloon
  for (let i = 1; i < size; i++) {
    arr[index - i] = size - i;
    arr[index + i] = size - i;
  }
  return JSON.stringify(arr)
}
const arr = [0];

document.getElementById('ans').textContent = pop(arr);