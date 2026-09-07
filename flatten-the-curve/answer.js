flattenCurve = arr => {
  if (!arr.length) {
    return JSON.stringify([]);
  }
  const avg = Math.round(arr.reduce((a, b) => a + b)/arr.length * 10) /10;
  return JSON.stringify(Array(arr.length).fill(avg));
}

const arr = [-13, 0, -18];

document.getElementById('ans').textContent = flattenCurve(arr); 