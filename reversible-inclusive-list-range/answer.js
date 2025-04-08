reversibleInclusiveList = (n1, n2) => {
  const arr = [];
  if (n1 > n2) {
    for (let i = n1; i >= n2; i--) {
      arr.push(i);
    }
  }
  else {
    for (let i = n1; i <= n2; i++) {
      arr.push(i);
    }
  }
  return JSON.stringify(arr);
}

const n1 = 24;
const n2 = 17;

document.getElementById('ans').textContent = reversibleInclusiveList(n1, n2);