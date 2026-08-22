squarePatch = n => {
  const patch = [];
  let sub;
  for (let i = 0; i < n; i++) {
    sub = [];
    for (let j = 0; j < n; j++) {
      sub.push(n);
    }
    patch.push(sub)
  }
  return JSON.stringify(patch);
}

const n = 1;

document.getElementById('ans').textContent = squarePatch(n);
