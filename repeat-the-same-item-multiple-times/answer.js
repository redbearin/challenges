repeat = (base, times) => {
  const arr = [];
  for (let i = 0; i < times; i++) {
    arr.push(base);
  }
  return JSON.stringify(arr);
}

const base = "edabit";
const times = 3;

document.getElementById('ans').textContent = repeat(base, times);