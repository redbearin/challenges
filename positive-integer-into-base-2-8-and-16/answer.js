function integerToString(num, base) {
  const digits = "0123456789abcdef";

  if (num < base) {
    return digits[num];
  }

  return integerToString(Math.floor(num / base), base)
       + digits[num % base];
}

const num = 212;
const base = 16;

document.getElementById('ans').textContent = integerToString(num, base);
