halveCount = (num, min) => {
  let count = 0;
  while (num > min) {
    if (num/2 > min) {
      num = num/2;
      count++;
    }
    else {
      break;
    }
  }
  return count;
}

const num = 1891;
const min = 4;

document.getElementById('ans').textContent = halveCount(num, min);