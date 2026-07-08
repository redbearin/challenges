iSqrt = num => {
  if (num < 0) {
    return "invalid";
  }
  let times = 0;
  while (num >= 2) {
    times++;
    num = Math.sqrt(num);
  }
  return times;
}

const num = 256;

document.getElementById('ans').textContent = iSqrt(num);
