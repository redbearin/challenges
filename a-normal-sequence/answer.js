normalSequence = num => {
  if (num === 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  }
  let secondToLast = 1;
  let last = 2;
  let temp;
  for (let i = 3; i <= num; i++) {
    temp = last;
    last = (secondToLast + last) % 3;
    secondToLast = temp;
    console.log ('i: ', i, ' last: ', last)
  }
  return last;
}

const num = 41;

document.getElementById('ans').textContent = normalSequence(num);