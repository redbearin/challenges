sumDigits = num => {
  count = 0;
  while (num >= 1) {
    count++;
    num = num/10;
  }
  return count;
}

const num = 1234569874525485632012345698745254856320;

document.getElementById('ans').textContent = sumDigits(num);