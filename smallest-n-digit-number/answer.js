smallest = (digits, multipleOf) => {
  for (let i = Math.pow(10, digits - 1); i < Infinity; i++) {
    if (i % multipleOf === 0) {
      return i;
    }
  }
}

const digits = 3;
const multipleOf = 8;

document.getElementById('ans').textContent = smallest(digits, multipleOf);