multiplicationTable = n => {
  let sub;
  const arr = [];
  for (let i = 1; i <= n; i++) {
    sub = [];
    for (let j = 1; j <= n; j++) {
      sub.push(i * j);
    }
    arr.push(sub);
  }
  return JSON.stringify(arr);
}

const n = 3;

document.getElementById('ans').textContent = multiplicationTable(n);