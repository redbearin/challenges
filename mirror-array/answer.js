mirror = arr => {
  const arrNew = [...arr];
  for (let i = arr.length - 2; i >= 0; i--) {
    arrNew.push(arr[i]);
  }
  return JSON.stringify(arrNew);
}

const arr = [0, 2, 4, 6];

document.getElementById('ans').textContent = mirror(arr);