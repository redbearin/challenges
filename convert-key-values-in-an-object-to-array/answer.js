objectToArray = obj => {
  return JSON.stringify(Object.entries(obj));
}
const obj = {
  D: 1,
  B: 2,
  C: 3
};

document.getElementById('ans').textContent = objectToArray(obj);