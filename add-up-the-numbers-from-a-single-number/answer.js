addUp = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

const num = 4;

document.getElementById('ans').textContent = addUp(4);