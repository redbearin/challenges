birthdayCakeCandles = arr => {
  const maxVal = Math.max(...arr);
  return arr.filter(x => x === maxVal).length;
}

const arr = [3, 2, 1, 3];

document.getElementById('ans').textContent = birthdayCakeCandles(arr);