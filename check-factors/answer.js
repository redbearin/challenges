checkFactors = (ints, num) => {
  for (let i = 0; i < ints.length; i++) {
    if (num % ints[i]) {
      return false;
    }
  }
  return true;
}

const ints = [2, 3, 4];
const num = 12;

document.getElementById('ans').textContent = checkFactors(ints, num);