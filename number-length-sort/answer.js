numberLenSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString();
  }
  arr.sort((a,b) => a.length - b.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }
  return JSON.stringify(arr);
}

const arr = [1, 54, 1, 2, 463, 2];

document.getElementById('ans').textContent = numberLenSort(arr);