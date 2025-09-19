pentagonal = num => {
  let total = 0;
  num = num - 1;
  while (num > 0) {
    total += num * 5;
    num--;
  }
  return total + 1;
}

const num = 8; 

document.getElementById('ans').textContent = pentagonal(8);