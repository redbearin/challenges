rowSum = rows => {
  let count = 0;
  for (let i = 1 ; i <= rows; i++) {
    count += i;
  }
  let sum = 0;
  for (let i = count - rows + 1; i <= count; i++) {
    sum += i;
  }
  return sum;
}

const rows = 4; 

document.getElementById('ans').textContent = rowSum(rows);