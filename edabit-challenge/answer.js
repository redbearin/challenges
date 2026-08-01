edaBit = (start, end) => {
  const arr = [];
  let str;
  for (let i = start; i <= end; i++) {
    str = '';
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        arr.push("Edabit");
      }
      else {
        arr.push("Eda");
      }
    }
    else if (i % 5 === 0) {
      arr.push("Bit")
    }
    else {
      arr.push(i);
    }
  }
  return JSON.stringify(arr);
}

const start = 0;
const end = 10;

document.getElementById('ans').textContent = edaBit(start, end);