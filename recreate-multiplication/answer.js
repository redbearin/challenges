multiply = (num, times) => {
  let ttl = 0;
  for (let i = 1 ; i <= Math.abs(times); i++) {
    ttl += num;
  }
  if (times < 0) {
    return -ttl;
  }
  return ttl;
}

const num = 4;
const times = 10;
document.getElementById('ans').textContent = multiply(num, times);