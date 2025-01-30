century = num => {
  if (Number.isInteger(num/100)) {
    return num/100 + "th century";
  }
  if (Math.floor(num/100) + 1 > 20) {
    return (Math.floor(num/100) + 1) + "st century";
  }
  return (Math.floor(num/100) + 1) + "th century";
}

const num = 1756;

document.getElementById('ans').textContent = century(num);