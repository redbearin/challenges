numberSquares = num => {
  return num * (num + 1) * (2 * num + 1)/6;
}

const num = 5;

document.getElementById('ans').textContent = numberSquares(num);
