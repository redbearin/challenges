moveZeros = arr => {
  const noZeroArr = arr.filter(item => !/0/.test(item));
  return JSON.stringify(noZeroArr.concat(new Array(arr.length - noZeroArr.length).fill(0)));
}

const arr = [1, 0, 1, 2, 0, 1, 3];

document.getElementById('ans').textContent = moveZeros(arr);