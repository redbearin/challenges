findEvenNums = num => {
  const evens = [];
  for (let i = 2; i <= num; i += 2) {
    evens.push(i);
  }
  return JSON.stringify(evens);
}

const num = 8;

document.getElementById('ans').textContent = findEvenNums(num);