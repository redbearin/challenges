sumArray = arr => {
  return arr.flat(Infinity).reduce((acc,val) => acc + val);
}

const arr = [1, [2, [1]], 3];

document.getElementById('ans').textContent = sumArray(arr);