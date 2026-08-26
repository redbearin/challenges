checkScore = arr => {
  arr = arr.flat();
  const obj = {
    '#': 5, 'O': 3, 'X': 1, '!': -1, '!!': -3, '!!!': -5
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += obj[arr[i]];
  }
  return sum < 0 ?
  0:
  sum;
}

const arr = [
  ["!!!", "O", "!"],
  ["X", "#", "!!!"],
  ["!!", "X", "O"]
];

document.getElementById('ans').textContent = checkScore(arr);