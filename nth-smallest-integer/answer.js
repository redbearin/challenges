nthSmallest = (arr, n) => {
  return n > arr.length ? 
  null :
  arr.sort()[n-1];
}

const arr = [1, 3, 5, 7];
const n = 3;

document.getElementById('ans').textContent = nthSmallest(arr, n)