abcmath = (base, times, div) => {
  for (let i = 0; i < times; i++) {
    base = 2 * base;
  }
  return base % div === 0;
}

const base = 5;
const times = 2;
const div = 1;

document.getElementById('ans').textContent = abcmath(base, times, div);