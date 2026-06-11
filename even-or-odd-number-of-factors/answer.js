factorGroup = num => {
  return Number.isInteger(Math.sqrt(num)) ?
    "odd":
    "even";
}

const num = 33;

document.getElementById('ans').textContent = factorGroup(num);