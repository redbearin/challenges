fibSeq = n => {
  if (n === undefined) {
    return undefined;
  }
  if (n === 0) {
    return JSON.stringify([]);
  }
  if (n === 1) {
    return JSON.stringify[0];
  }
  const instances = [0, 1];
  let idx = 1;
  for (let i = 1; i < n - 1; i++) {
    instances.push(instances[idx] + instances[idx - 1]);
    idx++;
  }
  return JSON.stringify(instances);
}

const n = 4;

document.getElementById('ans').textContent = fibSeq(n);
