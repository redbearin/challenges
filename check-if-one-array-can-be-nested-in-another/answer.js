canNest = (arr1, arr2) => {
  return (Math.min(...arr2) < Math.min(...arr1) && Math.max(...arr1) < Math.max(...arr2));
}

const arr1 = [1, 2, 3, 4];
const arr2 = [0, 6];

document.getElementById('ans').textContent = canNest(arr1, arr2);