getLength = arr => {
  return arr.flat(Infinity).length;
}

const arr = [1, [2, [3, [4, [5, 6]]]]];

document.getElementById('ans').textContent = getLength(arr);