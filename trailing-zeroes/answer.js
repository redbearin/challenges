trailingZeros = num => {
  let sum = 0;
  let roundedDown;
  for (let i = 1; i < Infinity; i++) {
    roundedDown = Math.floor(num /  Math.pow(5, i))
    if (roundedDown >= 1) {
      sum += roundedDown;
    }
    else {
      break;
    }
  }
  return sum;
}

const num = 1000;

document.getElementById('ans').textContent = trailingZeros(num);