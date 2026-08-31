sumDigits = (low, high) => {
  let sum = 0;
  for (let i = low; i <= high; i++) {
    i = i.toString();
    for (let j = 0; j < i.length; j++) {
      sum += +i[j];
    }
  }
  return sum;
}

const low = 17;
const high = 20;

document.getElementById('ans').textContent = sumDigits(low, high);