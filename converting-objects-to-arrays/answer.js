toArray = obj => {
  return JSON.stringify(Object.entries(obj));
}
const obj = { a: 1, b: 2 };

document.getElementById('ans').textContent = toArray(obj);