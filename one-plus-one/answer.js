wordedMath = str => {
  const strArr = str.toLowerCase().split(' ');
  let total = 0;
  if (strArr[0] === 'one') {
    total = 1;
  }
  if (strArr[0] === 'two') {
    total = 2;
  }
  if (strArr[1] === 'minus') {
    if (strArr[2] === 'one') {
      total -= 1;
    }
    if (strArr[2] === 'two') {
      total -= 2;
    }
  }
  else {
    if (strArr[2] === 'one') {
      total += 1;
    }
    if (strArr[2] === 'two') {
      total += 2;
    }
  }
  if (total === 1) {
    return 'One';
  }
  if (total === 2) {
    return 'Two';
  }
  return 'Zero';
}

const str = "One plus one";

document.getElementById('ans').textContent = wordedMath(str);