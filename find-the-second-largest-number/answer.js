secondLargest = arr => {
  arr.sort((a,b) => b - a);
  return arr[1];
}

const arr = [10, 40, 30, 20, 50];

document.getElementById('ans').textContent = secondLargest(arr);