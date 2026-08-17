nextSquare = num => Math.pow((Math.sqrt(num) + 1), 2);

const num = 121;

document.getElementById('ans').textContent = nextSquare(num);