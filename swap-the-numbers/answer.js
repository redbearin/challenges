swap = (a, b, c) => {
  return a === b ?
  c :
  (a === c ? b : a);
}

const a = 27;
const b = 31;
const c = 31;

document.getElementById('ans').textContent = swap(a, b, c);

