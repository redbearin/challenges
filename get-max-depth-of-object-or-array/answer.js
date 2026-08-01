const getDepth = obj => {
  let depth = 0;
  if (obj && typeof obj == 'object') {
    const values = Array.isArray(obj) ? obj : Object.values(obj);
    values.forEach((value) => {
      depth = Math.max(depth, getDepth(value));
    });
    depth++;
  }
  return depth;
};

const obj = { a: 1, b: { c: 1 } };

document.getElementById('ans').textContent = getDepth(obj);