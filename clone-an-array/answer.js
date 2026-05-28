clone = arr => {
  arr.push([... arr]);
  return JSON.stringify(arr);
}

const arr = [1, 1];

document.getElementById('ans').textContent = clone(arr);