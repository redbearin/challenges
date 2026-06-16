search = (arr, num) => {
  return arr.indexOf(num);
}

const arr = [1, 2, 3, 4];
const num = 3;

document.getElementById('ans').textContent = search(arr, num);