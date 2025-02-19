keysAndValues = obj => {
  return JSON.stringify([Object.keys(obj), Object.values(obj)]);
}

const obj = { a: 1, b: 2, c: 3 };

document.getElementById('ans').textContent = keysAndValues(obj);