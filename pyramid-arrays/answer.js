pyramidArrays = n => {
  const pyramid = [];
  let sub;
  for (let i = 1; i <= n; i++) {
    sub = [];
    for (let j = 0; j < i; j++) {
      sub.push(i);
    }
    pyramid.push(sub)
  }
  return JSON.stringify(pyramid)
}

const n = 5;

document.getElementById('ans').textContent = pyramidArrays(n);