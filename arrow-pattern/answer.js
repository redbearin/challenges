arrow = num => {
  const arrowArr = [];
  for (let i = 1; i <= num; i++) {
    arrowArr.push ('>'.repeat(i));
  }
  if (num % 2 === 0) {
    arrowArr.push ('>'.repeat(num))
  }
  for (let i = num - 1; i > 0; i--) {
    arrowArr.push ('>'.repeat(i));
  }
  return JSON.stringify(arrowArr);
}

const num = 4;

document.getElementById('ans').textContent = arrow(num);