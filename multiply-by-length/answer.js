multiplyByLength = arr => {
  const len = arr.length;
  return JSON.stringify(arr.map(ele => ele * len));
}

const arr = [1, 0, 3, 3, 7, 2, 1];

document.getElementById('ans').textContent = multiplyByLength(arr);