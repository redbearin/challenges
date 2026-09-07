diceGame = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1]) {
      return 0;
    }
    sum += arr[i][0] + arr[i][1];
  }
  return sum;
}

const arr = [[1, 2], [3, 4], [5, 6]];

document.getElementById('ans').textContent = diceGame(arr);