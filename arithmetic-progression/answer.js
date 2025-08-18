arithmeticProgression = (start, diff, ttl) => {
  let nums = [];
  let count = 0;
  for (let i = start; ; i += diff) {
    nums.push(i);
    count++;
    if (count === ttl) {
      break;
    }
  }
  return nums.join(', ');
}

const start = 1;
const diff = 0;
const ttl = 5;

document.getElementById('ans').textContent = arithmeticProgression(start, diff, ttl);