halfQuarterEighth = num => {
  return JSON.stringify([num/2, num/4, num/8]);
}

const num = 6;

document.getElementById('ans').textContent = halfQuarterEighth(num);