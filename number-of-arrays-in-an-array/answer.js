numOfSubbarrays = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]))
      count++;
  }
  return count;
}

const arr = [1, 2, 3];

document.getElementById('ans').textContent = numOfSubbarrays(arr);