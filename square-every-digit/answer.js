squareDigits = num => {
  const numStr = num.toString();
  const squares = [];
  // take each number and square it
  for (let i = 0; i < numStr.length; i++) {
    squares.push(Math.pow(+numStr[i], 2));
  }
  return squares.join('');
}

const num = 3212;

document.getElementById('ans').textContent = squareDigits(num);