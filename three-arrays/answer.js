sumCommon = (...args) => {
  let sum = 0;
  let count;
  let idx;
  for (let i = 0; i < args[0].length; i++) {
    count = 1;
    for (let j = 1; j < args.length; j++) {
      idx = args[j].findIndex(ele => ele === args[0][i]);
      args[j][idx] = '*';
      if (idx !== -1) {
        count++;
      }
    }
    if (count === args.length) {
      sum += args[0][i];
    }
  }
  return sum;
}

document.getElementById('ans').textContent = sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]);

