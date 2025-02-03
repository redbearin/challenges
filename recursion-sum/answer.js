sum = num => {
  if (num === 0) {
    return 0;
  }
  return num + sum(num - 1);
}

const num = 5;

document.getElementById('ans').textContent = sum(num);