minusOne = arr => {
  arr.slice(-1);
  return JSON.stringify(arr);
}

const arr = [1,2,3,4];

document.getElementById('ans').textContent = minusOne(arr);