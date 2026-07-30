addUpTo = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

const num = 3;
document.getElementById('ans').textContent = addUpTo(num);