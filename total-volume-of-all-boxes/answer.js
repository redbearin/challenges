totalVolume = (...boxes) => {
  let sum = 0;
  for (let i = 0; i < boxes.length; i++) {
    sum += boxes[i][0] * boxes[i][1] * boxes[i][2];
  }
  return sum;
}

document.getElementById('ans').textContent = totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);