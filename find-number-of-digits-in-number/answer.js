num_of_digits = num => {
  let count = 1;
  while (Math.abs(num) > 9) {
    count++;
    num = num / 10;
  }
  return count;
}

const num = -1305981031;

document.getElementById('ans').textContent = num_of_digits(num);