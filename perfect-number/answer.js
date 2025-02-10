checkPerfect = num => {
  const factors = [1];
  for (let i = 2; i < num; i++) {
    if (factors.includes(i)) {
      break;
    }
    if (num % i === 0) {
      factors.push(i, num/i);
    }
  }
  let sum = 0;
  for (let i = 0; i < factors.length; i++) {
    sum += factors[i];
  }
  return sum === num ?
  true :
  false;
}

const num = 496;

document.getElementById('ans').textContent = checkPerfect(num);