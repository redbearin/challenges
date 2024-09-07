numberOfDays = loc => {
  const total = Math.abs(loc[0]) + Math.abs(loc[1]);
  if (total % 5 === 0) {
    return total + total/5 - 1;
  }
  return total + Math.floor(total/5);s
}

const loc = [10, 10];

document.getElementById('ans').textContent = numberOfDays(loc); 