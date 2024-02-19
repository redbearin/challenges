getDiagonals = arr => {
  console.log(arr.length)
  const forw = [];
  const back = [];
  for (let i = 0; i < arr.length; i++) {
    forw.push(arr[i][i]);
    back.push(arr[i][arr[0].length - (i + 1)])
  }
  return JSON.stringify([forw , back]);
}

const arr = [[1, 2], [3, 4]];

document.getElementById('ans').textContent = getDiagonals(arr);